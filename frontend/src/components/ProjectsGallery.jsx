import React, { useState } from "react";

const categories = ["Tất cả", "Nhà ở", "Biệt thự", "Công trình thương mại", "Nội thất"];

const projects = [
    { id: 1, title: "Nhà ở Biên Hòa", category: "Biệt thự", image: "/projects/Nhà dì Út - Biên Hòa.jpg" },
    { id: 2, title: "Nhà Phố Cát Lái", category: "Biệt thự", image: "/projects/Nhà Phố Cát Lái.jpg" },
    { id: 3, title: "Căn hộ hiện đại", category: "Nhà ở", image: "/projects/Nhà Phố Q6.jpg" },
    { id: 4, title: "Căn hộ cao cấp", category: "Nhà ở", image: "/projects/Nhà Phố QL50.jpg" },
    { id: 5, title: "Phòng khách sạn", category: "Công trình thương mại", image: "/projects/Phòng khách sạn.jpg" },
    { id: 6, title: "Nhà phố", category: "Nội thất", image: "/projects/Thi công nhà Phố Chú Diệu.jpg" },
    { id: 7, title: "Resort", category: "Nội thất", image: "/projects/Thi công resot Long Hải.jpg" },
];
export default function ProjectGallery() {
    const [activeCategory, setActiveCategory] = useState("Tất cả");

    const filteredProjects =
        activeCategory === "Tất cả"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="w-full px-6 py-12 bg-gray-50">
            {/* Menu phân loại */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                            ? "bg-black text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Lưới hình ảnh dự án */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hiệu ứng overlay chữ mờ */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
