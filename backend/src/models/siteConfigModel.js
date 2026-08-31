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

const differenceItemSchema = new mongoose.Schema(
    {
        icon: {
            type: String,
            default: "users",
        },
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const partnerSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            default: "",
        },
        alt: {
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
            default: "",
        },

        youtubeUrl: {
            type: String,
            default: "",
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
            default: "",
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
        // ABOUT - HOME
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
            default: "",
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

        services: {
            type: [serviceSchema],
            default: [],
        },

        aboutHighlights: {
            type: [String],
            default: [],
        },

        // ==========================
        // ABOUT PAGE
        // ==========================

        aboutPageBannerUrl: {
            type: String,
            default: "/banner6.jpg",
        },

        aboutPageBannerTitle: {
            type: String,
            default: "Giới thiệu",
        },

        aboutPageEyebrow: {
            type: String,
            default: "Giới thiệu chung",
        },

        aboutPageTitle: {
            type: String,
            default: "Công ty TNHH THÁI HOÀNG BUILD",
        },

        aboutPageDescription: {
            type: String,
            default: "",
        },

        aboutPageServices: {
            type: [String],
            default: [],
        },

        aboutPageProfileImage: {
            type: String,
            default: "/anhHosonangluc.jpg",
        },

        aboutPageConstructionImage: {
            type: String,
            default: "/anhdangxaydung.jpg",
        },

        aboutPageProfileButtonText: {
            type: String,
            default: "Hồ sơ năng lực",
        },

        aboutPageContactButtonText: {
            type: String,
            default: "Liên hệ",
        },

        aboutPageContactButtonUrl: {
            type: String,
            default: "/contact",
        },

        // ==========================
        // DIFFERENCE
        // ==========================

        differenceEyebrow: {
            type: String,
            default: "Sự khác biệt về",
        },

        differenceTitle: {
            type: String,
            default: "ThaiHoangBuild",
        },

        differenceImageUrl: {
            type: String,
            default: "/ansukhacbiet.png",
        },

        differenceVideoUrl: {
            type: String,
            default: "",
        },

        differenceItems: {
            type: [differenceItemSchema],
            default: [],
        },

        // ==========================
        // PARTNERS
        // ==========================

        partnersEyebrow: {
            type: String,
            default: "Đối tác",
        },

        partnersTitle: {
            type: String,
            default: "Khách hàng tiêu biểu",
        },

        partners: {
            type: [partnerSchema],
            default: [],
        },

        // ==========================
        // PROFILE
        // ==========================

        profileEyebrow: {
            type: String,
            default: "ThaiHoangBuild",
        },

        profileTitle: {
            type: String,
            default: "Hồ sơ năng lực",
        },

        profileFlipbookUrl: {
            type: String,
            default:
                "https://online.fliphtml5.com/build2305/evxr/index.html",
        },

        // ==========================
        // HOME - BÁO GIÁ
        // ==========================

        homeQuoteTitle: {
            type: String,
            default: "Đăng ký báo giá",
        },

        homeQuoteNamePlaceholder: {
            type: String,
            default: "Tên của bạn",
        },

        homeQuoteAddressPlaceholder: {
            type: String,
            default: "Địa chỉ",
        },

        homeQuoteEmailPlaceholder: {
            type: String,
            default: "Email",
        },

        homeQuotePhonePlaceholder: {
            type: String,
            default: "Điện thoại",
        },

        homeQuoteMessagePlaceholder: {
            type: String,
            default: "Yêu cầu",
        },

        homeQuoteSubmitText: {
            type: String,
            default: "Gửi yêu cầu",
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
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const SiteConfig =
    mongoose.models.SiteConfig ||
    mongoose.model("SiteConfig", siteConfigSchema);