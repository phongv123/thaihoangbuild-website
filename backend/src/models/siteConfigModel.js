import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            default: "",
        },

        imageUrl: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const siteConfigSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            default: "CÔNG TY TNHH THÁI HOÀNG BUILD",
        },

        slogan: {
            type: String,
            default: "Xây Niềm Tin - Dựng Uy Tín",
        },

        logoUrl: {
            type: String,
            default: "",
        },

        hotline: {
            type: String,
            default: "0942 888 888",
        },

        hotlineSecondary: {
            type: String,
            default: "",
        },

        zaloNumber: {
            type: String,
            default: "0942 888 888",
        },

        zaloUrl: {
            type: String,
            default: "",
        },

        email: {
            type: String,
            default: "contact@thaihoangbuild.com",
        },

        address: {
            type: String,
            default:
                "Số 128 Đường Phạm Văn Thuận, P. Tân Tiến, TP. Biên Hòa, Đồng Nai",
        },

        workingHours: {
            type: String,
            default: "8:00 - 18:00 (Thứ 2 - Chủ Nhật)",
        },

        facebookUrl: {
            type: String,
            default: "https://facebook.com/thaihoangbuild",
        },

        youtubeUrl: {
            type: String,
            default: "https://youtube.com/@thaihoangbuild",
        },

        mapUrl: {
            type: String,
            default: "",
        },

        copyright: {
            type: String,
            default: "",
        },

        // ==========================
        // HERO
        // ==========================

        heroTitle: {
            type: String,
            default:
                "THIẾT KẾ & THI CÔNG KIẾN TRÚC - NỘI THẤT TRỌN GÓI",
        },

        heroSubtitle: {
            type: String,
            default:
                "Thái Hoàng Build đồng hành tạo dựng không gian sống mơ ước đẳng cấp...",
        },

        heroButtonText: {
            type: String,
            default: "NHẬN BÁO GIÁ NGAY",
        },

        heroButtonUrl: {
            type: String,
            default: "/contact",
        },

        // ==========================
        // ABOUT
        // ==========================

        aboutTitle: {
            type: String,
            default: "VỀ THÁI HOÀNG BUILD",
        },

        aboutSubtitle: {
            type: String,
            default:
                "Hơn 10 năm tiên phong trong lĩnh vực kiến trúc nội thất",
        },

        aboutDescription: {
            type: String,
            default:
                "Thái Hoàng Build là đơn vị chuyên nghiệp hàng đầu tại Biên Hòa...",
        },

        aboutImage1: {
            type: String,
            default: "",
        },

        aboutImage2: {
            type: String,
            default: "",
        },

        yearsExperience: {
            type: Number,
            default: 10,
        },

        completedProjectsCount: {
            type: Number,
            default: 350,
        },

        // ==========================
        // SERVICES
        // ==========================

        services: {
            type: [serviceSchema],
            default: [],
        },

        // ==========================
        // ABOUT HIGHLIGHTS
        // ==========================

        aboutHighlights: {
            type: [String],
            default: [
                "Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm",
                "Đội thợ thi công lành nghề, tuân thủ kỷ luật, an toàn lao động",
                "Cam kết tiến độ, Đảm bảo chất lượng, Không phát sinh",
            ],
        },

        // ==========================
        // PROCESS
        // ==========================

        processTitle: {
            type: String,
            default: "Quy trình thực hiện",
        },

        processSteps: {
            type: [String],
            default: [
                "Liên hệ tư vấn & Khảo sát hiện trạng",
                "Báo giá sơ bộ & Dự toán sơ bộ",
                "Triển khai hồ sơ thiết kế",
                "Bàn giao hồ sơ thiết kế",
                "Dự toán & Báo giá chi tiết",
                "Kí hợp đồng thi công",
                "Sản xuất & Thi công & Lắp đặt",
                "Giám sát thi công",
                "Vệ sinh & Nghiệm thu & Bàn giao",
                "Bảo hành & Chăm sóc khách hàng",
            ],
        },
    },
    {
        timestamps: true,
    }
);

export const SiteConfig =
    mongoose.models.SiteConfig ||
    mongoose.model("SiteConfig", siteConfigSchema);