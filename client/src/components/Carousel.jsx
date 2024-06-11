import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import c1 from "../assets/award.jpg";
import c2 from "../assets/complab.jpg";
import c3 from "../assets/lab.jfif";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"

const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{duration : 4000}}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={c1} alt="" className="h-screen w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" className="h-screen w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" className="h-screen w-full object-cover"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" className="h-screen w-full object-cover"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
