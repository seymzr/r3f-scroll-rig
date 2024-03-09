import React from 'react'

const Services = () => {
  return (
    <div className='text-white flex items-center flex-col  container mx-auto'>
    <h2 className='text-5xl md:text-7xl font-normal text-center'>
      <span style={{ color: "orange" }}>Notable</span> Startups
    </h2>
    <div className='flex items-center justify-around w-full py-8 px-12 md:px-0'>
      <ul className='list-style-none'>
        <li className='-ml-8 opacity-50 text-lg md:text-2xl m-4'>Lorem, ipsum</li>
        <li className='-ml-4 opacity-75 text-lg md:text-2xl m-4'>Lorem, ipsum</li>
        <li className='text-2xl md:text-4xl bg-[#dcdcdc4f] py-6 px-8 rounded-[10px]' >
          Lorem, ipsum
          <br /> <span className='text-lg md:text-xl text-[#b4b4b4]'>lorem ipsum dolor sit amet</span>
        </li>
        <li className='-ml-4 opacity-75 text-lg md:text-2xl m-4'>Lorem, ipsum</li>
        <li className='-ml-8 opacity-50 text-lg md:text-2xl m-4'>Lorem, ipsum</li>
      </ul>
      <div></div>
    </div>
  </div>
  )
}

export default Services