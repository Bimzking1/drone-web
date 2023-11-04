import React from 'react'
import video from "./../../public/citysky.mp4";

const HotFeature = () => {
  return (
    <div className='w-full xl:w-[1280px] flex flex-col items-center mb-8'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='w-fit p-8'>
                <video 
                    autoPlay={true} 
                    muted 
                    src={video} 
                    width="350px" 
                    height="auto" 
                    controls={false}
                    loop
                />
            </div>
            <div className='px-8 flex flex-col md:w-1/3 md:ml-4'>
                <div className='w-full text-3xl lg:text-4xl text-center font-semibold'>
                    Capture Your Moments with Our 360° Cameras
                </div>
                <div className='text-lg font-semibold my-8 text-center'>
                    The 360° camera lets you remain in the moment as 
                    you capture the spectacular. With the magnetic 
                    holders, you can conveniently use this camera
                    on your drone, your chest, or head,
                    keep your hands free, and film in FPV.
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotFeature