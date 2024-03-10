import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import newsletter from '../assets/newsletter.svg'
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props

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
            <h2 className="text-[#FF7B25] font-medium text-2xl mb-2">About</h2>
            <a className="text-xl text-white py-1 font-normal" href="">
              Our Team
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Overview
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Our Portfolio
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Baku ID
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              About Us
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Blog
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Career
            </a>
            <a className="text-xl text-white py-1 font-normal" href="">
              Contact
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#FF7B25] font-medium text-2xl mb-2">Company</h2>
            <div>
              {}
            </div>
          </div>
          <div className="self-center">
            <h2 className="text-white font-medium text-2xl">Subscribe to our newsletter</h2>
            <div className="w-fit relative my-3">
              <input
                type="email"
                placeholder="Your email"
                className=" rounded-[8px] border border-solid border-[#EBEAED] text-white bg-transparent p-2 px-3 w-[330px]"
              />
              <button className="bg-[#ff7b25] rounded-[8px] p-3 absolute right-0">
                <img src={newsletter} alt="newsletter" />
              </button>
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
          <p className=' loading text-lg text-white text-center'>&copy; 2024 SABAH.Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
