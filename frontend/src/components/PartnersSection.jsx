import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partners = [
    { img: "/partners/bachhoaxanh.png", alt: "Bách Hóa Xanh" },
    { img: "/partners/topzone.png", alt: "TopZone" },
    { img: "/partners/ankhang.png", alt: "Nhà thuốc An Khang" },
    { img: "/partners/dienmayxanh.png", alt: "Điện Máy Xanh" },
    { img: "/partners/tiniworld.png", alt: "TiniWorld" },
    { img: "/partners/thegioididong.png", alt: "Thế Giới Di Động" },
];

export default function PartnersSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center px-4">
                <p className="text-sky-700 font-semibold uppercase tracking-wide">Đối tác</p>
                <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-8">
                    Khách hàng tiêu biểu
                </h2>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="pb-10"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <img
                                    src={partner.img}
                                    alt={partner.alt}
                                    className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
