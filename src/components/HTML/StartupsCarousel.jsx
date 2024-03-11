import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Autoplay } from 'swiper/modules';
import slide_image_1 from '../../assets/sabahacademy.png';
import slide_image_2 from '../../assets/sabahacademy.png';
import slide_image_3 from '../../assets/sabahacademy.png';
import slide_image_4 from '../../assets/sabahacademy.png';
import slide_image_5 from '../../assets/sabahacademy.png';

function StartupsCarousel() {
  return (
    <div className="">
      <Swiper
      spaceBetween={50}
      autoHeight
        direction={'vertical'}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5} // Display 5 elements at a time
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow,Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className='text-white'>
            <p className='text-xl'>Push30</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='text-white'>
            <p className='text-xl'>Tredu</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#DCDCDC] backdrop-blur-sm p-3 '>
            <img className='w-24' src={slide_image_1} alt="logo" />
            <p className='text-white font-medium text-xl'>Peerstack</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='text-white'>
            <p className='text-xl'>Peerstack</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='text-white'>
            <p className='text-xl'>2School</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default StartupsCarousel;
