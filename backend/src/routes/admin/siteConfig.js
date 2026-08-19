import express from "express";
import { SiteConfig } from "../../models/siteConfigModel.js";

const router = express.Router();

// GET /api/admin/site-config
router.get("/", async (_req, res) => {
    try {
        let config = await SiteConfig.findOne().lean();

        if (!config) {
            config = await SiteConfig.create({});
            config = config.toObject();
        }

        res.json(config);
    } catch (error) {
        console.error("Admin GET site config error:", error);

        res.status(500).json({
            message: "Lỗi lấy cấu hình website",
            error: error.message,
        });
    }
});

// PUT /api/admin/site-config
router.put("/", async (req, res) => {
    try {
        let config = await SiteConfig.findOne();

        if (!config) {
            config = new SiteConfig(req.body);
        } else {
            Object.assign(config, req.body);
        }

        await config.save();

        res.json({
            message: "Cập nhật cấu hình website thành công",
            config,
        });
    } catch (error) {
        console.error("Admin PUT site config error:", error);

        res.status(500).json({
            message: "Lỗi lưu cấu hình website",
            error: error.message,
        });
    }
});

export default router;