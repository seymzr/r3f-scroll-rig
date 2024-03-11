import React, { useState } from 'react'
import { Menu } from '../Menu'
import StartupsCarousel from './StartupsCarousel';

const Services = ({navOpened,setNavOpened}) => {
  const [section, setSection] = useState(0);

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className=' self-center w-full absolute top-8 container mx-auto px-5'>
    <Menu onSectionChange={setSection}
        menuOpened={navOpened}
        setMenuOpened={setNavOpened} />
    </div>
    <div className=' container mx-auto'>
     
      <div className='text-white flex items-center flex-col  '>
    <h2 className='text-5xl md:text-7xl font-normal text-center'>
      <span style={{ color: "orange" }}>Notable</span> Startups
    </h2>
    <div className='flex services h-full items-center  w-full py-8 px-0 md:px-0'>
      <StartupsCarousel />
      <div></div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Services