// controllers/bannerController.js
import { Banner } from '../models/common.js'

// [GET] /api/banners
export const getBanners = async (req, res) => {
    try {
        const { limit = 12 } = req.query
        const items = await Banner.find()
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .populate('category')

        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/banners
export const createBanner = async (req, res) => {
    try {
        const it = await Banner.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
