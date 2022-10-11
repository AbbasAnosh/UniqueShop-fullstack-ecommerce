import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import "./NewSlider.css"

import img1 from "../../assets/pexels-andrea-piacquadio-3769747.jpg";
import img2 from "../../assets/pexels-vlada-karpovich-4050345.jpg";
import img3 from "../../assets/pexels-vlada-karpovich-4050388.jpg";
export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={img1} alt="" className="h-[500px] w-[100%] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="h-[500px] w-[100%] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="h-[500px] w-[100%] object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
