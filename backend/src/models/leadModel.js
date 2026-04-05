import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: [true, "Số điện thoại là bắt buộc"],
            trim: true,
            match: [/^[0-9]{9,11}$/, "SĐT không hợp lệ"]
        },

        email: {
            type: String,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Email không hợp lệ"]
        },

        address: {
            type: String,
            trim: true
        },

        message: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);