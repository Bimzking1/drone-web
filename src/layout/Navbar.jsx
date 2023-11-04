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
  
  let Links =[
    {name:"HOME",link:"/"},
    {name:"PRODUCTS",link:"/"},
    {name:"ABOUT US",link:"/"},
    {name:"CONTACT US",link:"/"},
  ];
  
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
      className='w-screen fixed flex items-center justify-center z-50'
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: '1s ease-in',
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

          {/* linke items */}
          <ul 
            className={`
              md:flex md:items-center md:pb-0 pb-12 absolute md:static 
              md:z-auto z-[-1] left-0 w-full z-10
              md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
              ${open ? 'top-12' : 'top-[-490px]'}
            `}
            style={{
              backgroundColor: navColor,
              transition: '1s ease-in',
            }}
          >
            {
                Links.map((link) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                </li>))
            }
            <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar