import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import required modules
import { Autoplay} from 'swiper/modules';
const Community = () => {
  return (
    <div className="community text-white my-8 mx-4 p-5 flex items-center justify-center">
      <div className=" w-full px-5 ">
        <Swiper dir='ltr' autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} spaceBetween={50} slidesPerView={3} className="w-full ">
          <SwiperSlide className='drop-shadow-xl' >Slide 1</SwiperSlide>
          <SwiperSlide className='drop-shadow-xl' >Slide 2</SwiperSlide>
          <SwiperSlide className='drop-shadow-xl' >Slide 3</SwiperSlide>
          <SwiperSlide className='drop-shadow-xl' >Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="text w-full">
        <h2 className="text-5xl md:text-7xl font-medium ">
          <span className="text-[orange]">Our</span> Community
        </h2>
        <p className="text-xl md:text-3xl py-3">
          Join the SABAH.HUB ecosystem and get access to the brightest experts in the world’s leading education and corporate institutions
        </p>
      </div>
    </div>
  )
}

export default Community
