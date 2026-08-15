// src/models/bannerModel.js
import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    coverImage: { type: String, required: true },
    linkUrl: { type: String, default: '' },
    buttonText: { type: String, default: 'Xem Ngay' },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.models.Banner ||
    mongoose.model("Banner", bannerSchema);