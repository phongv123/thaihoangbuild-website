// src/routes/admin/upload.js
import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import adminAuth from '../../middleware/adminAuth.js';

const router = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 } // Giới hạn 10MB
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// POST /api/admin/upload/image
router.post('/image', adminAuth, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Vui lòng chọn file hình ảnh' });
        }

        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'thaihoangbuild' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            uploadStream.end(req.file.buffer);
        });

        res.json({
            success: true,
            url: result.secure_url,
            public_id: result.public_id
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi upload ảnh: ' + error.message });
    }
});

export default router;