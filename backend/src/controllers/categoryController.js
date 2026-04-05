// controllers/categoryController.js
import { Category } from '../models/common.js'

// [GET] /api/categories
export const getCategories = async (req, res) => {
    try {
        const q = {}
        if (req.query.type) q.type = req.query.type

        const items = await Category.find(q).sort({ name: 1 })
        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/categories
export const createCategory = async (req, res) => {
    try {
        const it = await Category.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


