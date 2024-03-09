import React from 'react'

const Services = () => {
  return (
    <div className='text-white flex items-center flex-col  container mx-auto'>
    <h2 className='text-7xl font-normal'>
      <span style={{ color: "orange" }}>Notable</span> Startups
    </h2>
    <div className='flex items-center justify-around w-full py-8'>
      <ul className='list-style-none'>
        <li className='-ml-8 opacity-50 text-2xl m-4'>Lorem, ipsum</li>
        <li className='-ml-4 opacity-75 text-2xl m-4'>Lorem, ipsum</li>
        <li className='text-4xl bg-[#dcdcdc4f] py-6 px-8 rounded-[10px]' >
          Lorem, ipsum
          <br /> <span className='text-xl text-[#b4b4b4]'>lorem ipsum dolor sit amet</span>
        </li>
        <li className='-ml-4 opacity-75 text-2xl m-4'>Lorem, ipsum</li>
        <li className='-ml-8 opacity-50 text-2xl m-4'>Lorem, ipsum</li>
      </ul>
      <div></div>
    </div>
  </div>
  )
}

export default Services