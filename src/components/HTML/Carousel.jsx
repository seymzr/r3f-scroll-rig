import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import asana from '../../assets/asanaLogo.png'
import jira from '../../assets/jira.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import socar from '../../assets/socar.png'
import tehsil from '../../assets/tehsil.png'
import pashaholding from '../../assets/pashaholding.png'
import iqtisadiyyat from '../../assets/iqtisadiyyat.png'
import neqliyyat from '../../assets/neqliyyat.png'

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
        <SwiperSlide><img src={asana} alt="asanalogo" /></SwiperSlide>
        <SwiperSlide><img src={jira} alt="jira" /></SwiperSlide>
        <SwiperSlide><img src={slack} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={pashaholding} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={tehsil} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={neqliyyat} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={iqtisadiyyat} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={atlassian} alt="logo" /></SwiperSlide>
        <SwiperSlide><img src={socar} alt="logo" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
