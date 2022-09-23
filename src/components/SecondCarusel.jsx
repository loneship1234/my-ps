import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from '../img/elden ring.jpg';
import img2 from '../img/anthem.jpg';
import img3 from '../img/horizon forbiden west.jpg';
import img4 from '../img/ghost of tsushima.jpg';
import "swiper/css/effect-fade";
import { Autoplay,EffectFade,Pagination } from "swiper";


import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules

export default function SecondCarusel() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      effect={"fade"}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper  -mt-3  w-[55em] h-full  rounded-3xl"
    >
      <SwiperSlide className="rounded-3xl mt-5">
        <img src={img1} alt="" className="w-full  h-full rounded-3xl" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl mt-5">
        <img src={img2} alt="" className="w-full  h-full rounded-3xl" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl mt-5">
        <img src={img3} alt="" className="w-full  h-full rounded-3xl" />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl mt-5">
        <img src={img4} alt="" className="w-full  h-full rounded-3xl" />
      </SwiperSlide>
    </Swiper>
  );
}
