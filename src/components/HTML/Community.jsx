import React, { useState } from 'react'
import FancyCarousel from 'react-fancy-circular-carousel'
import 'react-fancy-circular-carousel/FancyCarousel.css'
import community1 from '../../assets/community1.jpg'
import community2 from '../../assets/community2.jpg'
import community3 from '../../assets/community3.jpg'

const Community = () => {
  const images = [community1, community2, community3]
  const [focusElement, setFocusElement] = useState(0);


  const info = ['Community', 'Community1', 'Community2'];
  return (
    <div className="community text-white my-8 md:mx-4 md:p-5 flex flex-col md:flex-row items-center justify-center">
      <div className=" w-full px-8 ">
        <FancyCarousel
          carouselRadius={window.innerWidth<768?150:300}
          peripheralImageRadius={window.innerWidth<768?50:100}
          centralImageRadius={window.innerWidth<768?70:150}
          setFocusElement={setFocusElement}
          autoRotateTime={4}
          borderWidth={1}
          borderHexColor={'1c364f'}
          images={images}
        />
      </div>
      <div className="text z-20 w-full info-box-wrapper">
        <h2 className="text-5xl md:text-7xl font-medium ">
          <span className="text-[orange]">Our</span> {info[focusElement]}
        </h2>
        <p className="text-xl md:text-3xl py-3">
          Join the SABAH.HUB ecosystem and get access to the brightest experts in the world’s leading education and corporate institutions
        </p>
      </div>
    </div>
  )
}

export default Community
