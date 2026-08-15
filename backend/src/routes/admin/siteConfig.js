// src/routes/admin/siteConfig.js
import express from 'express';
import { SiteConfig } from '../../models/siteConfigModel.js';
import adminAuth from '../../middleware/adminAuth.js';

const router = express.Router();

// GET /api/site-config - Lấy cấu hình công khai ra Frontend
router.get('/', async (req, res) => {
    try {
        let config = await SiteConfig.findOne();
        if (!config) {
            config = await SiteConfig.create({});
        }
        res.json(config);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lấy cấu hình: ' + error.message });
    }
});

// PUT /api/admin/site-config - Lưu cấu hình từ Admin CMS
router.put('/', adminAuth, async (req, res) => {
    try {
        let config = await SiteConfig.findOne();
        if (!config) {
            config = new SiteConfig(req.body);
        } else {
            Object.assign(config, req.body);
        }
        await config.save();
        res.json({ message: '✅ Cập nhật cấu hình website thành công', config });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lưu cấu hình: ' + error.message });
    }
});

export default router;