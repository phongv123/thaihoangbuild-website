import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProfileFlipbook() {
    const bookRef = useRef();

    const pages = [
        "/profile/cover.webp",
        "/profile/page1.jpg",
        "/profile/page2.jpg",
        "/profile/page3.png",
        "/profile/page5.webp",
    ];

    const handleNext = () => bookRef.current.pageFlip().flipNext();
    const handlePrev = () => bookRef.current.pageFlip().flipPrev();

    return (
        <section className="bg-gray-100 py-20 flex flex-col items-center">
            {/* Tiêu đề */}
            <div className="text-center mb-10">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-sky-500">
                    ThaiHoangBuild
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Hồ sơ năng lực
                </h2>
            </div>

            {/* Khung sách */}
            <div className="relative bg-gray-300 rounded-3xl shadow-2xl p-6 flex justify-center items-center w-[950px] max-w-full">
                {/* Cuốn sách */}
                <HTMLFlipBook
                    width={400}
                    height={360}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    drawShadow={true}
                    flippingTime={900}
                    useMouseEvents={true}
                    className="shadow-xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                    ref={bookRef}
                >
                    {pages.map((src, index) => (
                        <div
                            key={index}
                            className={`bg-white flex items-center justify-center overflow-hidden ${index === 0 ? "bg-gradient-to-br from-gray-100 to-gray-200" : ""
                                }`}
                        >
                            <img
                                src={src}
                                alt={`Trang ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </HTMLFlipBook>

                {/* Nút điều hướng */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </section>
    );
}
