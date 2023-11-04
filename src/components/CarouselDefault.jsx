import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot } from 'react-icons/rx';

const CarouselDefault = () => {
  const slides = [
    {
      url: 'https://cdn.mos.cms.futurecdn.net/YaVTFsBMYS9avufa8Q4bR5-970-80.jpg.webp',
      name: 'DJI Mini 3 Pro',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/sqoKrfZnPEsSzNkQ65zwEd-970-80.jpg.webp',
      name: 'DJI Air 3',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/rEw44YcG6bXnBexUbYSX98-970-80.jpg.webp',
      name: 'DJI Mavic 3 Pro',
    },

    {
      url: 'https://cdn.mos.cms.futurecdn.net/kfoMMbTb8zaQM9bBtRYWtN-970-80.jpg.webp',
      name: 'Autel Evo Lite+',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/x2vV3qc5cKuF238C6MgudA-970-80.jpg.webp',
      name: 'DJI Mini 3',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/GsygCgUBmkuFszb6Hmmg4S-970-80.jpg.webp',
      name: 'DJI Mavic 3 Classic',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/veWp9jCSS8AmtZ6XjT8uKh-970-80.jpg.webp',
      name: 'Ryze Tello',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/qfpn2RgubdxTH6Nt83RttV-970-80.jpg.webp',
      name: 'DJI Avata',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/AeiUH7MxzPrkt8jFBDf9Tm-970-80.jpg.webp',
      name: 'Autel Evo Nano+',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/huLrW5iN3rtrBgbikRoF5X-970-80.jpg.webp',
      name: 'BetaFPV Cetus Pro Kit',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full xl:w-[1280px] flex items-center justify-center py-16 px-4 relative group'>
      
      {/* Left Arrow */}
      <div className='bg-gray-400 hover:bg-gray-700 duration-300 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className='w-1/2 flex flex-col items-center mx-8 rounded-3xl'>
        <img 
          src={`${slides[currentIndex].url}`} 
          className="w-full max-h-[400px] rounded-2xl duration-500" 
          alt="logo" 
        />

        <div className='my-2 mt-4 text-4xl font-semibold'>
          {`${slides[currentIndex].name}`}
        </div>
      
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDot />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <div className='bg-gray-400 hover:bg-gray-700 duration-300 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

    </div>
  )
}

export default CarouselDefault