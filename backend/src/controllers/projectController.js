// controllers/projectController.js
import { Project } from '../models/common.js'

// [GET] /api/projects
export const getProjects = async (req, res) => {
    try {
        const { limit = 12 } = req.query
        const items = await Project.find()
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .populate('category')
        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/projects
export const createProject = async (req, res) => {
    try {
        const it = await Project.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
