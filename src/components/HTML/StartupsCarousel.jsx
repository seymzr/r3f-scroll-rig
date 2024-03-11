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
    <div className="h-full w-full  md:w-[70%]  ">
      <Swiper
      spaceBetween={10}
      autoHeight
        direction={'vertical'}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={6} // Display 5 elements at a time
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow,Autoplay]}
        className="swiper_container h-[50vh] w-full md:w-[50%]  "
      >
        <SwiperSlide>
          
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_1} alt="logo" />
            <h2 className='text-white font-medium text-xl'>11111</h2>
            <p className='text-white text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_2} alt="logo" />
            <h2 className='text-white font-medium text-xl'>222222</h2>
            <p className='text-white text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_3} alt="logo" />
            <h2 className='text-white font-medium text-xl'>3333</h2>
            <p className='text-white text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_4} alt="logo" />
            <h2 className='text-white font-medium text-xl'>4444</h2>
            <p className='text-white text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-[8px] py-8 p-5 '>
            <img className='w-24' src={slide_image_5} alt="logo" />
            <h2 className='text-white font-medium text-xl'>5555</h2>
            <p className='text-white text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default StartupsCarousel;
