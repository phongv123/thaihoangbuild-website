import { Project } from '../models/common.js'

// [GET] /api/projects
export const getProjects = async (req, res) => {
    try {
        const {
            limit = 12,
            featured,
            excludeFeatured,
        } = req.query;

        const filter = {};

        // Chỉ lấy dự án tiêu biểu
        if (featured === "true") {
            filter.featuredHome = true;
        }

        // Dùng cho "Dự án thiết kế" trên Trang chủ
        // Không lấy những dự án đã chọn làm Dự án tiêu biểu
        if (excludeFeatured === "true") {
            filter.featuredHome = {
                $ne: true,
            };
        }

        const items = await Project.find(filter)
            .sort(
                featured === "true"
                    ? {
                        homeOrder: 1,
                        createdAt: -1,
                    }
                    : {
                        createdAt: -1,
                    }
            )
            .limit(Number(limit))
            .populate("category");

        res.json({ items });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};

// [POST] /api/projects
export const createProject = async (req, res) => {
    try {
        const it = await Project.create(req.body)
        res.status(201).json(it)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}