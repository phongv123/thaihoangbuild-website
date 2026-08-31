import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
    {
        page: {
            type: String,
            required: true,
            enum: [
                "home",
                "about",
                "projects",
                "services",
                "consulting",
                "contact",
            ],
            default: "home",
            index: true,
        },

        title: {
            type: String,
            default: "",
        },

        subtitle: {
            type: String,
            default: "",
        },

        coverImage: {
            type: String,
            default: "",
        },

        buttonText: {
            type: String,
            default: "",
        },

        buttonUrl: {
            type: String,
            default: "",
        },

        order: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Banner ||
    mongoose.model("Banner", bannerSchema);