// src/components/DifferenceSection.jsx
import React from "react";
import { FaPlay, FaUsers, FaBuilding, FaClock, FaCogs, FaHardHat, FaTasks } from "react-icons/fa";

export default function DifferenceSection() {
    return (
        <section className="bg-[#f8fafc] text-white py-16 mt-12 md:mt-16">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
                {/* LEFT - Image with Play Button */}
                <div className="relative flex justify-center items-center">
                    <img
                        src="/ansukhacbiet.png" // đổi ảnh 
                        alt="Công nhân"
                        className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    />

                    {/* Play Button */}
                    <a
                        href="https://www.youtube.com/results?search_query=x%C3%A2y+nh%C3%A0+minecraft" // link YouTube 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-[-8px] left-4 bg-cyan-500 hover:bg-cyan-400 w-14 h-14 flex items-center justify-center rounded"
                    >
                        <FaPlay className="text-white text-xl ml-1" />
                    </a>
                </div>

                {/* RIGHT - Content */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0ea5e9] mb-2">
                        Sự khác biệt về
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        ThaiHoangBuild
                    </h2>

                    {/* 6 boxes */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaUsers className="text-white text-2xl mb-2" />
                            <p>100+ Nhân viên</p>
                        </div>

                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaBuilding className="text-white text-2xl mb-2" />
                            <p>25+ Năm thành lập</p>
                        </div>

                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaClock className="text-white text-2xl mb-2" />
                            <p>Hỗ trợ 24/7</p>
                        </div>

                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaCogs className="text-white text-2xl mb-2" />
                            <p>Chuyên nghiệp</p>
                        </div>

                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaHardHat className="text-white text-2xl mb-2" />
                            <p>Thi công toàn quốc</p>
                        </div>

                        <div className="bg-cyan-500 hover:bg-cyan-400 transition rounded p-4 flex flex-col items-center text-center">
                            <FaTasks className="text-white text-2xl mb-2" />
                            <p>2000+ Hạng mục</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
