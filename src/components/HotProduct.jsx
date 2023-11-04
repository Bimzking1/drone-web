import React from 'react'
import style from './style/style.module.css'
import DjiAvata from './../../public/mavic3pro.png'

const HotProduct = () => {
  return (
    <div className='w-full xl:w-[1280px] flex flex-col items-center'>
        <div className='text-5xl font-semibold mb-16'>
            New Arrival
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <img 
              src={DjiAvata} 
              className={`${style.element} w-1/2`}
              alt="logo" 
            />
            <div className='w-[600px] bg-green-500'>
                <div className='text-3xl font-bold'>Dji Mavic 3 Pro</div>
                <div className='my-4 font-semibold'>Specifications</div>
                <div className='mt-4 font-semibold'>Weight</div>
                <div className=''>956 g</div>
                <div className='mt-4 font-semibold'>Camera</div>
                <div className=''>20MP (Hasselblad Camera)</div>
                <div className=''>48MP (70mm Medium Tele Camera)</div>
                <div className=''>12MP (Tele Camera)</div>
                <div className='mt-4 font-semibold'>Flight Time</div>
                <div className=''>~ 42 Minutes</div>
                <div className='mt-4 font-semibold'>Range</div>
                <div className=''>15km (FCC), 12km (CE)</div>
            </div>
        </div>
    </div>
  )
}

export default HotProduct