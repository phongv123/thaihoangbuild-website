import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSlider({ title = "Dự án thiết kế", items = [], action }) {
    if (!items || !items.length) return null;

    return (
        <section className="container my-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                {action}
            </div>


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={items.length > 1}
                pagination={items.length > 1 ? { clickable: true } : false}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={items.length > 1}
                className="rounded-xl overflow-hidden shadow-md"
            >
                {items.map((project, idx) => (
                    <SwiperSlide key={idx}>
                        <article className="bg-white rounded-xl overflow-hidden shadow group">
                            <img
                                src={project.cover || "/designProject/1.jpg"}
                                alt={project.title || "Project"}
                                className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {project.title || "Chưa có tiêu đề"}
                                </h3>
                                {project.category && (
                                    <p className="text-sm text-blue-600 mt-1">
                                        {typeof project.category === "object"
                                            ? project.category.name
                                            : project.category}
                                    </p>
                                )}
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
