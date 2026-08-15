// src/models/siteConfigModel.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    imageUrl: { type: String, default: '' }
});

const siteConfigSchema = new mongoose.Schema({
    companyName: { type: String, default: 'CÔNG TY TNHH THÁI HOÀNG BUILD' },
    slogan: { type: String, default: 'Xây Niềm Tin - Dựng Uy Tín' },
    hotline: { type: String, default: '0942 888 888' },
    zaloNumber: { type: String, default: '0942 888 888' },
    email: { type: String, default: 'contact@thaihoangbuild.com' },
    address: { type: String, default: 'Số 128 Đường Phạm Văn Thuận, P. Tân Tiến, TP. Biên Hòa, Đồng Nai' },
    workingHours: { type: String, default: '8:00 - 18:00 (Thứ 2 - Chủ Nhật)' },
    facebookUrl: { type: String, default: 'https://facebook.com/thaihoangbuild' },
    youtubeUrl: { type: String, default: 'https://youtube.com/@thaihoangbuild' },
    logoUrl: { type: String, default: '' },

    // Hero Section
    heroTitle: { type: String, default: 'THIẾT KẾ & THI CÔNG KIẾN TRÚC - NỘI THẤT TRỌN GÓI' },
    heroSubtitle: { type: String, default: 'Thái Hoàng Build đồng hành tạo dựng không gian sống mơ ước đẳng cấp...' },
    heroButtonText: { type: String, default: 'NHẬN BÁO GIÁ NGAY' },

    // About Section
    aboutTitle: { type: String, default: 'VỀ THÁI HOÀNG BUILD' },
    aboutSubtitle: { type: String, default: 'Hơn 10 năm tiên phong trong lĩnh vực kiến trúc nội thất' },
    aboutDescription: { type: String, default: 'Thái Hoàng Build là đơn vị chuyên nghiệp hàng đầu tại Biên Hòa...' },
    aboutImage1: { type: String, default: '' },
    aboutImage2: { type: String, default: '' },
    yearsExperience: { type: Number, default: 10 },
    completedProjectsCount: { type: Number, default: 350 },

    // Core Services (4 dịch vụ cốt lõi)
    services: [serviceSchema]
}, { timestamps: true });

export const SiteConfig = mongoose.model('SiteConfig', siteConfigSchema);