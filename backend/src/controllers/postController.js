// controllers/postController.js
import { Post } from '../models/common.js'

// [GET] /api/posts
export const getPosts = async (req, res) => {
    try {
        const { limit = 12 } = req.query
        const items = await Post.find()
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .populate('category')
        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/posts
export const createPost = async (req, res) => {
    try {
        const it = await Post.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
