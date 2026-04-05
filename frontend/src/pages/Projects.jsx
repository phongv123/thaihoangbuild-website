import React from "react";
import ProjectsGallery from "../components/ProjectsGallery";

export default function Projects() {
    return (
        <div>
            {/* Banner đầu trang */}
            <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src="/banners/duan-banner.jpg"
                    alt="Banner Dự án"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-3">Dự án</h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Nơi chúng tôi lưu giữ những công trình tâm huyết
                    </p>
                </div>
            </section>

            {/* Component danh sách dự án */}
            <ProjectsGallery />
        </div>
    );
}
