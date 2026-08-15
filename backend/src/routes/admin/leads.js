// src/routes/admin/leads.js
import express from 'express';
import Lead from '../../models/leadModel.js';
import adminAuth from '../../middleware/adminAuth.js';

const router = express.Router();

// POST /api/leads/public - Khách hàng điền form nhận báo giá trên website
router.post('/public', async (req, res) => {
    try {
        const { name, phone, email, address, serviceNeeded, message } = req.body;
        if (!name || !phone) {
            return res.status(400).json({ message: 'Vui lòng điền Họ tên và Số điện thoại' });
        }

        const lead = new Lead({
            name,
            phone,
            email,
            address,
            serviceNeeded: serviceNeeded || 'Yêu cầu tư vấn thiết kế thi công',
            message,
            source: 'Website thaihoangbuild.com',
            status: 'new'
        });

        await lead.save();
        res.status(201).json({ success: true, message: '✅ Yêu cầu tư vấn đã gửi thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi gửi yêu cầu: ' + error.message });
    }
});

// GET /api/admin/leads - Danh sách tư vấn cho Admin CMS
router.get('/', adminAuth, async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT /api/admin/leads/:id/status - Cập nhật trạng thái (new -> contacted -> done)
router.put('/:id/status', adminAuth, async (req, res) => {
    try {
        const { status } = req.body;
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!lead) return res.status(404).json({ message: 'Không tìm thấy yêu cầu' });
        res.json({ message: '✅ Cập nhật trạng thái thành công', lead });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /api/admin/leads/:id - Xóa yêu cầu rác
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.params.id);
        res.json({ message: '✅ Xóa thành công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;