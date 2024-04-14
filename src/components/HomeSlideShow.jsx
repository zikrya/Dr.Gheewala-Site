import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const HomeSlideShow = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const delay = 3000; // Delay in milliseconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length === 0) {
    return null;
  }

  return (
    <section className='relative w-full h-screen mt-[-100px]'>
      <div className='absolute inset-0 z-10 flex justify-between items-center px-4'>
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring transition"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="w-8 h-8 text-black" />
        </button>
        <button
          className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring transition"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="w-8 h-8 text-black" />
        </button>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            key={index}
          >
            <img src={slide.image} alt='slide' className='w-full h-full object-cover' />
          </div>
        );
      })}
    </section>
  );
};

export default HomeSlideShow;

