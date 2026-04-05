import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ServicesSection() {
    const faqs = [
        {
            id: 1,
            question: "Công Ty Đã Hoạt Động Bao Lâu?",
            answer:
                "Công ty Cổ phần ThaihoangBuild – tiền thân là Công ty Trách nhiệm hữu hạn Trà Vinh - đã có hơn 25 năm phát triển. Đây là minh chứng cho uy tín và chất lượng trong lĩnh vực xây dựng.",
        },
        {
            id: 2,
            question: "Thế Mạnh Trong Thi Công Của ThaihoangBuild Là Gì?",
            answer:
                "Năng lực thi công tối ưu, có thể thi công cùng lúc 50 cửa hàng. Tiến độ thi công thần tốc với phương pháp 'thi công gói đầu' độc quyền giúp rút ngắn 50% thời gian.",
        },
        {
            id: 3,
            question: "Sau Khi Bàn Giao Công Trình Có Chế Độ Bảo Hành Như Thế Nào?",
            answer:
                "Chính sách bảo hành rõ ràng cho từng hạng mục, với thời gian từ 6 tháng đến 3 năm tùy loại công trình.",
        },
        {
            id: 4,
            question: "Chất Lượng Nhân Sự Tại ThaihoangBuild Có Đảm Bảo?",
            answer:
                "Đội ngũ kỹ sư và công nhân được đào tạo bài bản, có kinh nghiệm nhiều năm trong ngành xây dựng và thiết kế nội thất.",
        },
    ];

    const [activeId, setActiveId] = useState(null);

    return (
        <section className="relative py-20 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                {/* LEFT COLUMN: FAQ */}
                <div>
                    <h4 className="text-sky-700 font-semibold uppercase mb-2">
                        ThaihoangBuild
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#004D73] mb-8">
                        Các Câu Hỏi Thường Gặp
                    </h2>

                    <div className="relative pl-8">
                        {/* Orange vertical line */}
                        <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-orange-500 rounded-full" />

                        {faqs.map((item) => {
                            const open = activeId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="mb-6 border-b border-gray-200 pb-4 last:border-none"
                                >
                                    <button
                                        onClick={() => setActiveId(open ? null : item.id)}
                                        className="flex justify-between items-center w-full text-left"
                                    >
                                        <div className="flex items-start gap-4">
                                            <motion.div
                                                layout
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                className={`w-4 h-4 rounded-full border-2 mt-1 ${open ? "bg-orange-500 border-orange-500" : "border-sky-600"
                                                    }`}
                                            />
                                            <h3
                                                className={`text-lg font-semibold transition-colors ${open ? "text-orange-500" : "text-gray-800"
                                                    }`}
                                            >
                                                {item.question}
                                            </h3>
                                        </div>

                                        {/* Arrow icon  */}
                                        <motion.div
                                            animate={{ rotate: open ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="text-gray-500 ml-2 flex-shrink-0"
                                        >
                                            <ChevronDown size={22} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <motion.div
                                                key="content"
                                                initial={{ opacity: 0, maxHeight: 0 }}
                                                animate={{ opacity: 1, maxHeight: 300 }}
                                                exit={{ opacity: 0, maxHeight: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                                className="pl-9 pr-4 mt-2 text-gray-600 leading-relaxed overflow-hidden"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT COLUMN: IMAGE + orange stripe */}
                <div className="relative">
                    <div className="overflow-hidden rounded-xl shadow-lg relative z-10">
                        <img
                            src="/hinh-dichvu.jpg"
                            alt="FAQ illustration"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* đường sọc cam bên phải */}
                    <div
                        className="absolute top-[8%] bottom-[8%] right-[-80px] w-[200px] bg-orange-500 opacity-90 rounded-lg -skew-x-[18deg] z-0"
                        style={{
                            boxShadow: "0 8px 30px rgba(249,115,22,0.25)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
