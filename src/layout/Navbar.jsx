import React, { useState, useEffect }  from 'react'
import { PaperAirplaneIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [navSize, setnavSize] = useState("auto");
  const [navColor, setnavColor] = useState("transparent");
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("auto") : setnavSize("auto");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  
  let [open, setOpen] = useState(false);
  
  const openNavbar = () => {
    if (open == false){
      setOpen(true)
    } else {
      setOpen(false)
    }
    
    if (navColor == "transparent"){
      setnavColor("white")
    }
  }
  
  return (
    <div
      className='w-full fixed flex items-center justify-center z-50'
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: '1s ease-in'
      }}
    >
      <div className='w-full xl:w-[1280px]'>
        <div className='w-full md:flex items-center justify-between py-4 md:px-10 px-7'>

          {/* Logo */}
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-2 z-50'>
              <PaperAirplaneIcon className='w-7 h-7 text-green-600'/>
              <div className='hover:text-3xl duration-500'>DroNeeds</div>
          </div>

          {/* Menu icon */}
          <div onClick={()=>openNavbar()} className='absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7'>
              {
                  open ? <XMarkIcon/> : <Bars3BottomRightIcon />
              }
          </div>

          {/* Linked items */}
          <div 
            className={`
              md:flex md:items-center md:pb-0 pb-12 absolute md:static 
              md:z-auto z-[-1] left-0 w-full z-10
              md:w-auto md:pl-0 px-8
              ${open ? 'top-12' : 'top-[-490px]'}
            `}
            style={{
              backgroundColor: navColor,
              transition: '1s ease-in'
            }}
          >
            <div className='text-xl mt-6 md:items-center md:text-center md:gap-4 flex flex-col md:flex-row md:ml-8 md:my-0 font-semibold'>
                <a href="#" className='hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-blue-400 duration-500'>
                  HOME
                </a>
                <a href="#" className='hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-blue-400 duration-500'>
                  PRODUCTS
                </a>
                <a href="#" className='hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-blue-400 duration-500'>
                  ABOUT US
                </a>
                <a href="#" className='hover:bg-gray-200 md:hover:bg-gray-100 rounded-full px-4 py-2 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-blue-400 duration-500'>
                  CONTACT US
                </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar