// controllers/productController.js
import { Product } from '../models/common.js'

// [GET] /api/products
export const getProducts = async (req, res) => {
    try {
        const { limit = 12 } = req.query
        const items = await Product.find()
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .populate('category')
        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/products
export const createProduct = async (req, res) => {
    try {
        const it = await Product.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
