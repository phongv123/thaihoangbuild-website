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

// admin routes
import adminLogin from "./src/routes/admin/login.js";
import adminProjects from './src/routes/admin/projects.js'
import adminProducts from './src/routes/admin/products.js'
import adminCategories from './src/routes/admin/categories.js'

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
app.use(cors()) //có tên miền riêng thì không xài cái này nữa mà xài cái phía dưới.

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

// error handler đặt cuối cùng
app.use(errorHandler)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`🚀 API running on port ${port}`))

//lead chong spam
app.use('/api/leads', leadLimiter)