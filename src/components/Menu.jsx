import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import newsletter from '../assets/newsletter.svg'
import rightarrow from '../assets/rightarrow.svg'
import { useState } from 'react'
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props
  const [companyClicked, setCompanyClicked] = useState()
  const [aboutClicked, setAboutClicked] = useState()
  const [showForm,setShowForm] = useState()

  const prefix = [
    {
      value: '010',
      label: '010'
    },
    {
      value: '050',
      label: '050'
    },
    {
      value: '055',
      label: '055'
    },
    {
      value: '060',
      label: '060'
    },
    {
      value: '070',
      label: '070'
    },
    {
      value: '077',
      label: '077'
    }
  ]
  return (
    <div className="flex  w-full justify-between">
      <img className="z-50" src={logo} alt="sabahhub logo" />
      <button onClick={() => setMenuOpened(!menuOpened)} className="z-50    p-3 9 w-11 h-11 rounded-md">
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? 'rotate-45  translate-y-0.5' : ''}`} />
        <div className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? 'hidden' : ''}`} />
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? '-rotate-45' : ''}`} />
      </button>
      <div
        className={`z-40 loading fixed top-0 right-0 bottom-0  transition-all  overflow-hidden flex flex-col-reverse justify-between py-24 
      ${menuOpened ? 'w-full h-full bg-black' : 'w-full h-0'}`}>
        <div className="container mx-auto loading flex flex-col md:flex-row items-start justify-between px-4 py-24">
          <div className="hidden md:flex">
            <a href="">
              <img className="mx-3" src={facebook} alt="facebook " />
            </a>
            <a href="">
              <img className="mx-3" src={linkedin} alt="linkedin " />
            </a>
            <a href="">
              <img className="mx-3" src={instagram} alt="instagram " />
            </a>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full items-center justify-between mb-2">
              <h2 className="text-[#FF7B25] font-medium text-2xl ">About</h2>
              <button
                onClick={() => {
                  setAboutClicked(!aboutClicked)
                }}
                className="ml-12 md:hidden ">
                <img className={`${aboutClicked ? '-rotate-90' : ''} duration-300`} src={rightarrow} alt="rightarrow" />
              </button>
            </div>
            <div className={`${aboutClicked ? 'flex' : 'hidden md:flex'} duration-300 fex flex-col`}>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Our Team
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Overview
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Our Portfolio
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Baku ID
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                About Us
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Blog
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Career
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Contact
              </a>
            </div>
          </div>
          <hr className="h-[1px] w-full my-2 border-0 bg-[#787878] block md:hidden" />
          <div className="flex flex-col">
            <div className="flex w-full items-center justify-between mb-2">
              <h2 className="text-[#FF7B25] font-medium text-2xl ">Company</h2>
              <button
                onClick={() => {
                  setCompanyClicked(!companyClicked)
                }}
                className="ml-12 md:hidden ">
                <img className={`${companyClicked ? '-rotate-90' : ''} duration-300`} src={rightarrow} alt="rightarrow" />
              </button>
            </div>
            <div className={`${companyClicked ? 'flex' : 'hidden md:flex'} duration-300  flex-col`}>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Privacy
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Support
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Help Desk
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                FAQ
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Blog
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Career
              </a>
              <a className="text-xl text-[#A5A5A5] md:text-white py-1 font-normal" href="">
                Contact
              </a>
            </div>
          </div>
          <div className="w-full md:w-fit my-5 md:my-0 flex flex-col items-center self-center">
            <h2 className="text-white font-medium text-2xl self-start">Subscribe to our newsletter</h2>
            <div className="w-fit relative my-3 flex flex-col ">
              <div className={`${showForm?"hidden":"flex"}  flex-col`}>
              <input
                type="email"
                placeholder="Your email"
                className=" focus:outline-none rounded-[8px] w-full border border-solid border-[#EBEAED] text-white bg-transparent p-2 px-3 w-[330px]"
              />
              <button onClick={()=>setShowForm(true)} className="bg-[#ff7b25] rounded-[8px] p-3 px-4 absolute right-0">
                <img src={newsletter} alt="newsletter" />
              </button>
              </div>
              <div className={`${showForm?"flex":"hidden"} my-2  flex-col`}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className=" focus:outline-none rounded-[8px] w-full border border-solid border-[#EBEAED] text-white bg-transparent p-2 px-3 w-[330px]"
                />
                <div className="flex my-2">
                  <select
                    className=" focus:outline-none rounded-l-[8px] w-[40%] border border-solid border-[#EBEAED] border-r-0 text-white bg-transparent p-2 px-3 w-[330px]"
                    name=""
                    id="">
                    {prefix.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className=" focus:outline-none rounded-r-[8px] w-full border border-solid border-[#EBEAED] text-white bg-transparent p-2 px-3 w-[330px]"
                  />
                </div>
                <button onClick={()=>setShowForm(false)} className='w-full bg-[#FF7B25] rounded-[8px] px-5 py-2 text-white font-bold'>Subscribe</button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <span className="font-bold text-white mr-2">A: </span>
                <p className="text-lg text-white">57 Uzeyir Hajibeyov, Baku, Azerbaijan</p>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-white mr-2">E: </span>
                <p className="text-lg text-white">info@sabahlab.edu.az</p>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-white mr-2 self-start">P: </span>{' '}
                <p className="text-lg text-white">
                  Acceleration: + 994 (051) 240-16-97 <br />
                  Incubation: + 994 (051) 277-13-50
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className=" loading text-lg text-white text-center">&copy; 2024 SABAH.Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
