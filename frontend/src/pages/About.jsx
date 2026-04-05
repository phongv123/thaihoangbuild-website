// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import DifferenceSection from "../components/DifferenceSection";
import PartnersSection from "../components/PartnersSection";
import ProfileFlipbook from "../components/ProfileFlipbook";

export default function About() {
    return (
        <div className="about-page">
            {/* Banner */}
            <div className="relative h-64 md:h-80 lg:h-96 mb-8">
                <img
                    src="/banner6.jpg"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Giới thiệu
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Hồ sơ năng lực */}
                <div className="relative">
                    <img
                        src="/anhHosonangluc.jpg"
                        alt="Hồ sơ năng lực"
                        className="rounded-lg shadow-lg"
                    />
                    <motion.img
                        src="/anhdangxaydung.jpg"
                        alt="Công trình"
                        className="absolute top-6 -left-24 w-48 rounded-lg shadow-lg border-4 border-white"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <button className="absolute bottom-0 left-0 bg-orange-500 text-white px-6 py-3 font-semibold">
                        Hồ sơ năng lực
                    </button>
                </div>

                {/* Right - Nội dung */}
                <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase">
                        Giới thiệu chung
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Công ty Cổ phần ThaiHoangBuild
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Theo tôn chỉ “Niềm tin của khách hàng là trên hết”, ThaiHoangBuild sẽ là
                        người đồng hành tin cậy của Quý khách hàng và Đối tác; đem đến lợi
                        ích bền vững và gây dựng mối quan hệ hợp tác lâu dài, hiệu quả trong
                        lĩnh vực xây dựng.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-green-600">✔</span>
                            <span className="font-semibold">Xây dựng trọn gói</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-600">✔</span>
                            <span className="font-semibold">Thiết kế - Thi công nội thất</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-600">✔</span>
                            <span className="font-semibold">Sửa chữa - Bảo trì</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-600">✔</span>
                            <span className="font-semibold">Thiết kế - Thi công quảng cáo</span>
                        </div>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded">
                        Liên hệ
                    </button>
                </div>
            </section>
            {/* Sự khác biệt */}
            <DifferenceSection />
            {/* Đối tác */}
            <PartnersSection />
            {/* Hồ sơ năng lực */}
            <ProfileFlipbook />
        </div>
    );
}
