import React from 'react'
import Drone1 from './../../public/drone1.jpg'
import Drone2 from './../../public/drone2.jpg'
import Drone3 from './../../public/drone3.jpg'

const AboutUs = () => {
  return (
    <div className='w-full xl:w-[1280px] flex flex-col items-center'>
        <div className='text-5xl font-semibold mb-16'>
            About Us
        </div>
        <div className=''>
            <div className='flex'>
                <div className='mr-16 bg-red-300'>
                    <div className='text-4xl font-semibold'>
                        We Give The Best Drone Solutions
                    </div>
                    <div className='text-xl mt-8'>
                        We are a team of drone experts who wants help
                        our clients with the best solutions we can
                        offer. Established in 2013, we have 10 years
                        of experiences making our clients satisfied
                        with their needs of drones.
                    </div>
                </div>
                <div className='w-[1200px]'>
                    <img
                        src={Drone1} 
                        className={`w-full`}
                        alt="logo" 
                    />
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <img 
                        src={Drone2} 
                        className={`w-full`}
                        alt="logo" 
                    />
                </div>
                <div className=''>
                    <div className=''>
                        Specializing In Drone Advanced Technology
                    </div>
                    <div className=''>
                        Our Team are capable to serve our clients
                        with the best current technologies.
                        We always make our team updated
                        and always do a year evaluation of
                        technologies.
                    </div>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className=''>
                        Specializing In Drone Advanced Technology
                    </div>
                    <div className=''>
                        DroNeeds focuses on three distinct parts: 
                        the vision, core values, and network. 
                        DroNeeds uses an expert team to make these
                        things delivered in the best way.

                        Our experts are focused and passionate
                        with their works and product deliveries.
                    </div>
                </div>
                <div className=''>
                    <img 
                        src={Drone3} 
                        className={`w-full`}
                        alt="logo" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs