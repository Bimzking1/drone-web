import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import HotProduct from './HotProduct'
import CarouselSlick from './CarouselSlick'
import AboutUs from './AboutUs'
import HotFeature from './HotFeature'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>  
        <div id="home"></div>
        <Navbar className='z-50 top-0'/>

        <div className='flex w-full flex-col justify-center z-0'>
            <div className='bg-fog bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen'>
                <div className='text-center lg:flex lg:gap-4 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Capture
                    </div>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Incredible
                    </div>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Views
                    </div>
                    </div>
                <div className='mt-4 md:mt-2 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-xl pt-4 mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        DroNeeds gives you every drones you needed.
                    </div>
                    <div className='text-center rounded-lg text-gray-100 text-xl mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Best quality from all over the world.
                    </div>
                </div>
            </div>
        </div>
        
        <div className='bg-gray-100 py-16 w-full flex items-center justify-center'>
            <HotProduct/>
        </div>
        
        <div id="aboutus" className='bg-gray-800 w-full flex items-center justify-center'>
            <AboutUs/>
        </div>
        
        <div id="products" className='bg-gray-100 w-full flex items-center justify-center'>
            <CarouselSlick/>
        </div>
        
        <div className='bg-gray-100 w-full flex items-center justify-center'>
            <HotFeature/>
        </div>
        
        <div id="contactus" className='bg-gray-100 w-full flex items-center justify-center'>
            <ContactUs/>
        </div>

        <Footer className='z-50'/>
    </>
  )
}

export default Home