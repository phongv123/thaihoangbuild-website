import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Category, Project, Product, Post, Banner } from '../src/models/common.js'
dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

await Promise.all([Project.deleteMany({}), Product.deleteMany({}), Post.deleteMany({}), Category.deleteMany({}), Banner.deleteMany({})])

const cat = await Category.create([
  {name:'Căn hộ', type:'project'},
  {name:'Nhà phố', type:'project'},
  {name:'Văn phòng', type:'project'},
  {name:'Vật liệu · Sàn gỗ', type:'material'},
  {name:'Tấm ốp tường PVC', type:'material'},
  {name:'Bài viết', type:'post'}
])

function fakeItem(i, type){
  return {
    title: `${type} mẫu số ${i+1}`,
    excerpt: 'Mô tả ngắn gọn cho nội dung hiển thị ở trang chủ.',
    cover: `https://picsum.photos/seed/${type}${i}/800/600`,
    category: cat[i % cat.length]._id
  }
}

await Project.insertMany(Array.from({length:12}, (_,i)=>fakeItem(i,'Dự án')))
await Product.insertMany(Array.from({length:8},  (_,i)=>({...fakeItem(i,'Sản phẩm'), price: (i+1)*1000000 })))
await Post.insertMany(Array.from({length:6},     (_,i)=>({...fakeItem(i,'Bài viết'), content: 'Nội dung...'})))
await Banner.insertMany([{title:'Thiết kế & thi công', cover:'https://picsum.photos/seed/banner/1600/900', link:'/contact', order:1}])

console.log('Seeded.'); await mongoose.disconnect(); process.exit(0)
