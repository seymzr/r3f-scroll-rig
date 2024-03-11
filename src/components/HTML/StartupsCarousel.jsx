import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Autoplay } from 'swiper/modules';
import slide_image_1 from '../../assets/sabahacademy.png';
import slide_image_2 from '../../assets/sabahstudio.png';
import slide_image_3 from '../../assets/sabahlab.png';
import slide_image_4 from '../../assets/sabahincubation.png';
import slide_image_5 from '../../assets/socar.png';

function StartupsCarousel() {
  return (
    <div className="h-full">
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
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow,Autoplay]}
        className="swiper_container h-[50vh]"
      >
        <SwiperSlide>
          
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_1} alt="logo" />
            <p className='text-white font-medium text-xl'>11111</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_2} alt="logo" />
            <p className='text-white font-medium text-xl'>222222</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_3} alt="logo" />
            <p className='text-white font-medium text-xl'>3333</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_4} alt="logo" />
            <p className='text-white font-medium text-xl'>4444</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_5} alt="logo" />
            <p className='text-white font-medium text-xl'>5555</p>
            <p className='text-[#7D7D7D] text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default StartupsCarousel;
