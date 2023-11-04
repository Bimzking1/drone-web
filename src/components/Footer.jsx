import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import DroNeedsWhite from './../assets/DroNeeds_White.svg'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-gray-800 z-50'>
      <div className='bg-gray-800 w-full xl:w-[1280px] text-gray-100 text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='w-4/5'>
                    <img
                        src={DroNeedsWhite}
                    />
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5'>
                    DroNeeds is the largest drone publisher company
                    and drone service providers in Indonesia.
                    We help our customers to fullfilled their
                    satisfaction.
                </div>
                <div className='flex justify-center md:justify-start py-4 gap-4'>
                    <a href='https://www.instagram.com/' target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineInstagram style={{ width: '100%', height: '100%' }}/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <BsFacebook style={{color: "#ffffff", width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineYoutube style={{color: "#ffffff", width: '100%', height: '100%' }} />
                    </a>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold'>
                    Services
                </div>
                <div className='md:py-1'>
                    Drones Guide
                </div>
                <div className='md:py-1'>
                    Become Professional
                </div>
                <div className='md:py-1'>
                    Go International
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold'>
                    Discover
                </div>
                <div className='md:py-1'>
                    Modern Drones
                </div>
                <div className='md:py-1'>
                    New 12K Camera
                </div>
                <div className='md:py-1'>
                    Products
                </div>
                <div className='md:py-1'>
                    New Feature
                </div>
                <div className='md:py-1'>
                    Community
                </div>
                <div className='md:py-1'>
                    Hobbies
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold'>
                    Products
                </div>
                <div className='md:py-1'>
                    Drones
                </div>
                <div className='md:py-1'>
                    Action Camera
                </div>
                <div className='md:py-1'>
                    Recording Gears
                </div>
            </div>

        </div>
        <hr/>
        <div className='text-center md:flex gap-8 text-xs my-4 lg:px-4'>
            <div className='mb-2'>
                © DroNeeds 2023. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md-block'>
                About Us
            </div>
            <div className='font-bold mb-2'>
                User Agreement
            </div>
            <div className='font-bold mb-2'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2'>
                Terms of Services
            </div>
            <div className='font-bold mb-2'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer