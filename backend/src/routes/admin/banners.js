// src/routes/admin/banners.js
import express from 'express';
import Banner from '../../models/bannerModel.js';
import adminAuth from '../../middleware/adminAuth.js';

const router = express.Router();

// GET /api/banners/public - Danh sách banner kích hoạt cho Slider
router.get('/public', async (req, res) => {
    try {
        const banners = await Banner.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
        res.json(banners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /api/admin/banners - Quản lý tất cả banner cho Admin
router.get('/', adminAuth, async (req, res) => {
    try {
        const banners = await Banner.find().sort({ order: 1, createdAt: -1 });
        res.json(banners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /api/admin/banners - Thêm Banner mới
router.post('/', adminAuth, async (req, res) => {
    try {
        const banner = new Banner(req.body);
        await banner.save();
        res.status(201).json({ message: '✅ Thêm banner thành công', banner });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT /api/admin/banners/:id - Cập nhật Banner
router.put('/:id', adminAuth, async (req, res) => {
    try {
        const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!banner) return res.status(404).json({ message: 'Không tìm thấy banner' });
        res.json({ message: '✅ Cập nhật banner thành công', banner });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /api/admin/banners/:id - Xóa Banner
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        const banner = await Banner.findByIdAndDelete(req.params.id);
        if (!banner) return res.status(404).json({ message: 'Không tìm thấy banner' });
        res.json({ message: '✅ Xóa banner thành công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;