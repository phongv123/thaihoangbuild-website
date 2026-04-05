import React, { useState } from "react";

export default function BeforeAfterCustom() {
    const items = [
        { id: 1, title: "Dự án 1", subtitle: "Tiến độ thi công", before: "/beforeAfter/anh.jpg", after: "/beforeAfter/hinhsau.jpg" },
        { id: 2, title: "Dự án 2", subtitle: "Cửa hàng nội thất", before: "/beforeAfter/truoc1.jpg", after: "/beforeAfter/sau1.jpg" },
        { id: 3, title: "Dự án 3", subtitle: "Thi công văn phòng", before: "/beforeAfter/truoc3.jpg", after: "/beforeAfter/sau3.jpg" },
        { id: 4, title: "Dự án 4", subtitle: "Cải tạo showroom", before: "/beforeAfter/truoc4.jpg", after: "/beforeAfter/sau4.jpg" },
    ];

    const [positions, setPositions] = useState(
        items.reduce((acc, item) => ({ ...acc, [item.id]: 50 }), {})
    );

    const handleChange = (id, value) => {
        setPositions((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#004D73] mb-12">
                    Dự Án Trước & Sau Thi Công
                </h2>

                <div className="space-y-16">
                    {items.map((item) => (
                        <div key={item.id} className="text-center group">
                            {/* Tiêu đề từng dự án */}
                            <h3 className="text-2xl font-bold uppercase text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">{item.subtitle}</p>

                            {/* Phần Before/After */}
                            <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl shadow-xl">
                                {/* Ảnh trước */}
                                <img
                                    src={item.before}
                                    alt="before"
                                    className="w-full h-full object-cover absolute top-0 left-0"
                                />
                                {/* Ảnh sau */}
                                <img
                                    src={item.after}
                                    alt="after"
                                    className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out"
                                    style={{ clipPath: `inset(0 0 0 ${positions[item.id]}%)` }}
                                />

                                {/* Đường chia dọc (mượt + nổi bật khi hover) */}
                                <div
                                    className={`absolute top-0 bottom-0 transition-all duration-500 ease-in-out group-hover:scale-x-125`}
                                    style={{
                                        left: `${positions[item.id]}%`,
                                        width: "3px",
                                        background: "#ffffff",
                                        transform: "translateX(-1.5px)",
                                        boxShadow: "0 0 10px rgba(255,255,255,0.6)",
                                    }}
                                />

                                {/* Thanh range (ẩn nhưng có con trỏ kéo) */}
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={positions[item.id]}
                                    onChange={(e) => handleChange(item.id, e.target.value)}
                                    className="absolute w-full h-full top-0 left-0 opacity-0 cursor-ew-resize"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
