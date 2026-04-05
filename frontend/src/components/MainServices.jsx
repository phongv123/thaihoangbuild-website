import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export default function MainServices() {
    const navigate = useNavigate();
    const services = [
        {
            id: "cat-lai",
            title: "Cải tạo nhà phố Cát Lái",
            desc: "Cải tạo trọn gói nhà phố 1 trệt 3 lầu.",
            image: "/mainservices/Nhà Phố Cát Lái.jpg",
        },
        {
            id: "nha-16m2-q2",
            title: "Cải tạo nhà 16m2 quận 2",
            desc: "Giải quyết bài toán bố trí công năng, đảm bảo diện tích sử dụng cho gia chủ.",
            image: "/mainservices/Nhà Phố Q6.jpg",
        },
        {
            id: "khach-san",
            title: "Cải tạo 15 phòng khách sạn",
            desc: "Thay đổi mô hình dịch vụ, tư vấn thiết kế thi công trọn gói.",
            image: "/mainservices/Phòng khách sạn.jpg",
        },
        {
            id: "can-ho-resort-long-hai",
            title: "Cải tạo căn hộ Resort Long Hải",
            desc: "Thay đổi diện mạo, không gian thư gian cuối tuần cho gia đình.",
            image: "/mainservices/Thi công resot Long Hải.jpg",
        },
        {
            id: "kaoraoke-binh-loi",
            title: "Xây mới kaoraoke Bình Lợi",
            desc: "Thi công mô hình kinh doanh, tạo ra giá trị trong tương lai.",
            image: "/mainservices/kaoraokeBL.jpg",
        },
        {
            id: "nha-pho-quan8",
            title: "Xây mới nhà phố quận 8",
            desc: "Trọn gói từ móng đến mái, từ phần thô đến hoàn thiện.bàn giao tận tay chủ nhà.",
            image: "/mainservices/nhaphoquan8.jpg",
        },
        {
            id: "thi-cong-nha-thep-tien-che",
            title: "Thi công nhà thép tiền chế",
            desc: "Ứng dụng kết cấu nhẹ, tăng tốc độ thi công, cam kết chất lượng kết cấu, bền đẹp từ cấu kiện.",
            image: "/mainservices/nhatheptienche.jpg",
        },
    ];

    return (
        <section className="container my-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-10">
                DỰ ÁN TIÊU BIỂU
            </h2>

            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
            >
                {services.map((s, i) => (
                    <SwiperSlide key={i}>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <img
                                src={s.image}
                                alt={s.title}
                                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                            />
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-gray-700 mb-5">{s.desc}</p>
                                <button
                                    onClick={() => navigate(`/projects/${s.id}`)}
                                    className="bg-gradient-to-r from-[#2f6de1] to-[#1fc7d4]
                                            hover:from-[#275fd0] hover:to-[#18b7c2]
                                            text-white px-5 py-2 rounded-md font-semibold
                                            transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    XEM THÊM
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
