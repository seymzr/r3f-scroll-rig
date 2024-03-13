import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import arti from '../../assets/arti.png'
import bda from '../../assets/bda.png'
import code from '../../assets/code.png'
import div from '../../assets/div.png'
import domino from '../../assets/domino.png'
import hirelamp from '../../assets/hirelamp.png'
import icyf from '../../assets/icyf.png'
import ie from '../../assets/ie.png'
import space from '../../assets/space.png'
import trilogy from '../../assets/trilogy.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    < div style={{width:"100vw"}} className=''>
      <Swiper
      loop={true}
      slidesPerView={window.innerWidth<768?4:7}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-36' src={arti} alt="arti" /></SwiperSlide>
        <SwiperSlide><img className='w-24' src={bda} alt="bda" /></SwiperSlide>
        <SwiperSlide><img src={code} alt="code" /></SwiperSlide>
        <SwiperSlide><img src={div} alt="div" /></SwiperSlide>
        <SwiperSlide><img src={domino} alt="domino" /></SwiperSlide>
        <SwiperSlide><img src={hirelamp} alt="hirelamp" /></SwiperSlide>
        <SwiperSlide><img className='w-36' src={icyf} alt="icyf" /></SwiperSlide>
        <SwiperSlide><img src={ie} alt="ie" /></SwiperSlide>
        <SwiperSlide><img src={space} alt="space" /></SwiperSlide>
        <SwiperSlide><img src={trilogy} alt="trilogy" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
