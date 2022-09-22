import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Rating from "./Rating.jsx";
// Import Swiper styles
import "swiper/css";
import Data from "../data/Data";

// import img from "../img/ghost runner.jpg";
import { CaruselCard } from "./Card.jsx";

function Carusel() {
  return (
    // <div className="ml-6">
    <Swiper
      spaceBetween={8}
      slidesPerView={2}
      breakpoints={{
        640: {
          spaceBetween: 28,
          slidesPerView: 5,
          
        },
      }}
      style={{ paddingLeft: "12px", paddingRight: "0px" }}
      className=" w-[92vw] "
    >
      {/* style={{background:"-webkit-gradient(linear,right bottom, left top , color-stop(9%, transparent),color-stop(1%, #d71c3c), color-stop(0%, #d71c3c))"}} */}
      {/* content-none after:bg-white after:w-3 after:h-3 after:block after:ml-auto */}
      {Data.slice(7, 16).map((e) => {
        return (
          <SwiperSlide>
            <CaruselCard
              id={e.id}
              name={e.name}
              price={e.price}
              imgUrl={e.imgUrl}
              rate={e.rate}
              category="RPG,action"
              company="cd project"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
    // </div>
  );
}

export default Carusel;
