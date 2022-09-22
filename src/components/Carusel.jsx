import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from './Rating.jsx';
// Import Swiper styles
import 'swiper/css';

import img from '../img/ghost runner.jpg';

function Carusel() {
  return (
    <div>
         <Swiper
      spaceBetween={48}
      slidesPerView={6}
      style={{paddingLeft:'0px',paddingRight:'45px'}}
      className='ml-10 bg-red- pl-20 w-[92vw] '
    >
   {/* style={{background:"-webkit-gradient(linear,right bottom, left top , color-stop(9%, transparent),color-stop(1%, #d71c3c), color-stop(0%, #d71c3c))"}} */}
   {/* content-none after:bg-white after:w-3 after:h-3 after:block after:ml-auto */}
      <SwiperSlide> 
<div className='x h-96 w-56  rounded-3xl card-bg cursor-pointer group '>
<img src={img} className='rounded-3xl w-full h-[14em] group-hover:h-full transition-all group-hover:z-10' alt="" />
<div className='pl-5 group-hover:absolute group-hover:z-50' >
<p className='  font-medium text-sm tracking-wider capitalize mt-3 group-hover:absolute'>ghost runner</p>
<Rating star={4}/>
<div className=''><p className=' text-[11px] text-gray-400  mt-1'>RPG,action,</p></div>
<div className=''><p className='text-[11px] text-gray-400  mt-px'>CD Project Red</p></div>
<p className=' font-medium text-sm tracking-wider capitalize mt-4'>$59.99</p>
</div>
</div>
        </SwiperSlide>
        

    </Swiper>
    </div>
  )
}

export default Carusel