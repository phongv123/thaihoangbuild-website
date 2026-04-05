import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "./Banner";

export default function Hero({ slides }) {
  // Nếu không truyền slides thì có thể rơi về mảng mặc định (tránh lỗi)
  const defaultSlides = [
    {
      image: "/banner_home/1.jpg",
      title: "",
      desc: "",

    },
    {
      image: "/banner_home/2.jpg",
      title: "",
      desc: "",

    },
    {
      image: "/banner_home/3.jpg",
      title: "",
      desc: "",

    },
    {
      image: "/banner_home/4.jpg",
      title: "",
      desc: "",

    },
    {
      image: "/banner_home/5.jpg",
      title: "",
      desc: "",

    },
    {
      image: "/banner_home/6.jpg",
      title: "",
      desc: "",

    },
  ];

  const data = slides && slides.length ? slides : defaultSlides;

  return (
    <section className="hero relative h-[95vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        navigation={data.length > 1}
        pagination={data.length > 1 ? { clickable: true } : false}
        loop={data.length > 1}
        className="h-full"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[95vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Banner title={slide.title} desc={slide.desc} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
