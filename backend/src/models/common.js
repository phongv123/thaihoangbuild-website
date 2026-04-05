import mongoose from 'mongoose'
const opts = { timestamps: true }
export const Category = mongoose.model('Category', new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['project', 'product', 'material', 'post'], default: 'project' }
}, opts))

export const Project = mongoose.model('Project', new mongoose.Schema({
  title: String,
  excerpt: String,
  cover: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, opts))

export const Product = mongoose.model('Product', new mongoose.Schema({
  title: String,
  excerpt: String,
  price: Number,
  cover: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, opts))

export const Post = mongoose.model('Post', new mongoose.Schema({
  title: String,
  excerpt: String,
  cover: String,
  content: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, opts))

export const Lead = mongoose.model(
  'Lead',
  new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      phone: { type: String, required: true, trim: true },
      address: { type: String, trim: true },
      message: { type: String, trim: true },
      source: { type: String, default: 'website' },
    },
    { timestamps: true }
  )
);


export const Banner = mongoose.model('Banner', new mongoose.Schema({
  title: String, cover: String, link: String, order: Number
}, opts))
