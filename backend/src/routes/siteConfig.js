import express from "express";
import { SiteConfig } from "../models/siteConfigModel.js";

const router = express.Router();

// GET /api/site-config
router.get("/", async (_req, res) => {
    try {
        let config = await SiteConfig.findOne().lean();

        if (!config) {
            config = await SiteConfig.create({});
            config = config.toObject();
        }

        res.json(config);
    } catch (error) {
        console.error("GET site config error:", error);

        res.status(500).json({
            message: "Lỗi lấy cấu hình website",
            error: error.message,
        });
    }
});

export default router;