import React from 'react'
import asana from '../../assets/asanaLogo.png'
import jira from '../../assets/jira.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import socar from '../../assets/socar.png'
import tehsil from '../../assets/tehsil.png'
import pashaholding from '../../assets/pashaholding.png'
import iqtisadiyyat from '../../assets/iqtisadiyyat.png'
import neqliyyat from '../../assets/neqliyyat.png'
import Carousel from './Carousel'


const Partners = () => {
  return (
    <div className="partners text-white container mx-auto flex items-center flex-col">
      <h2 className="text-5xl md:text-8xl font-medium py-6 my-4">Partners</h2>

      <div className="w-[90%] mx-auto grid grid-cols-3 place-items-center gap-[90px] md:gap-[30px] ">
        <div className=" h-[90px] md:h-[200px] w-[120px] md:w-[300px] p-5 border border-solid border-white/50 rounded-[8px]  backdrop-blur-sm flex items-center justify-center">
          <img className="" src={pashaholding} alt="pasha holding logo" />
        </div>
        <div className=" h-[90px] md:h-[200px] w-[120px] md:w-[300px] p-5 border border-solid border-white/50 rounded-[8px]  backdrop-blur-sm flex items-center justify-center">
          <img className="" src={socar} alt="socar logo" />
        </div>
        <div className=" h-[90px] md:h-[200px] w-[120px] md:w-[300px] p-5 border border-solid border-white/50 rounded-[8px]  backdrop-blur-sm flex items-center justify-center">
          <img className="" src={tehsil} alt="tehsil logo" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[50px] md:gap-[90px] my-6 md:my-12">
        <div className=" h-[90px] md:h-[200px] w-[120px] md:w-[300px] p-5 border border-solid border-white/50 rounded-[8px]  backdrop-blur-sm flex items-center justify-center">
          <img className="" src={iqtisadiyyat} alt="iqtisadiyyat logo" />
        </div>
        <div className=" h-[90px] md:h-[200px] w-[120px] md:w-[300px] p-5 border border-solid border-white/50 rounded-[8px]  backdrop-blur-sm flex items-center justify-center">
          <img className="" src={neqliyyat} alt="neqliyyat logo" />
        </div>
      </div>
      <div className='my-12 w-full flex items-center justify-center '>
        <Carousel />
      </div>
    </div>
  )
}

export default Partners
