// routes/products.js
import { Router } from 'express'
import { getProducts, createProduct } from '../controllers/productController.js'

const r = Router()

r.get('/', getProducts)
r.post('/', createProduct)

export default r
