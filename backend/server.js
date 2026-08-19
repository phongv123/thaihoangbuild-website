// server.js
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from "helmet"

// import routes
import projectRoutes from './src/routes/projects.js'
import categoryRoutes from './src/routes/categories.js'
import postRoutes from './src/routes/posts.js'
import leadRoutes from './src/routes/leads.js'
import bannerRoutes from './src/routes/banners.js'
import productRoutes from './src/routes/products.js'
import siteConfigPublicRoutes from "./src/routes/siteConfig.js";

// admin routes
import adminLogin from "./src/routes/admin/login.js";
import adminProjects from './src/routes/admin/projects.js';
import adminProducts from './src/routes/admin/products.js';
import adminCategories from './src/routes/admin/categories.js';
import adminSiteConfigRoutes from "./src/routes/admin/siteConfig.js";
import bannersRoutes from './src/routes/admin/banners.js';
import uploadRoutes from './src/routes/admin/upload.js';
import leadsRoutes from './src/routes/admin/leads.js';

// middleware
import adminAuth from './src/middleware/adminAuth.js'
import errorHandler from './src/middleware/errorHandler.js'

//chống spam
import rateLimit from "express-rate-limit"
const leadLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 phút
  max: 5, // 1 IP chỉ gửi tối đa 5 lần
  message: { message: "Bạn gửi quá nhiều yêu cầu. Vui lòng thử lại sau." }
})

dotenv.config()
const app = express()

//Chặn một số attack cơ bản
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)

// middleware chung
const allowedOrigins = [
  'http://localhost:5173',
  'https://thaihoangbuild-website-vercel.vercel.app', // sửa đúng domain vercel của bạn
  'https://thaihoangbuild.com'
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json({ limit: '10mb' }));

// QUAN TRỌNG: thêm dòng này
app.options('*', cors()) //có tên miền riêng thì không xài cái này nữa mà xài cái phía dưới.

//Nếu có tên miền riêng
// app.use(cors({
//   origin: ["https://tenmiencuaban.vn"],
//   methods: ["GET","POST"]
// }))

app.use(express.json())
app.use(morgan('dev'))

// connect mongo
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Mongo connected'))
  .catch((e) => {
    console.error('❌ MongoDB connection error:', e)
    process.exit(1)
  })

// health check
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// public routes
app.use('/api/projects', projectRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/leads', leadRoutes)
app.use('/api/banners', bannerRoutes)
app.use('/api/products', productRoutes)

// admin routes (có bảo vệ)
app.use("/api/admin", adminLogin);
app.use('/api/admin/projects', adminAuth, adminProjects)
app.use('/api/admin/products', adminAuth, adminProducts)
app.use('/api/admin/categories', adminAuth, adminCategories)
app.use(
  "/api/admin/site-config",
  adminAuth,
  adminSiteConfigRoutes
);
app.use('/api/admin/banners', adminAuth, bannersRoutes);
app.use('/api/admin/upload', adminAuth, uploadRoutes);
app.use('/api/admin/leads', adminAuth, leadsRoutes);

app.use(
  "/api/site-config",
  siteConfigPublicRoutes
);


// error handler đặt cuối cùng
app.use(errorHandler)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`🚀 API running on port ${port}`))

//lead chong spam
app.use('/api/leads', (req, res, next) => {
  if (req.method === 'OPTIONS') return next()
  return leadLimiter(req, res, next)
}, leadRoutes)