import React from 'react';
import Abstract from '../assets/home/abstract.jpg';
import drone from '../assets/home/drone.png';
import monitor from '../assets/home/monitoq.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
  const settings = {
    arrows: false,
    dots: false,          
    infinite: true,    
    speed: 500,         
    slidesToShow: 1,    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen py-3 bg-cover" style={{ backgroundImage: `url(${Abstract})` }}>
      <Slider {...settings} className="w-full pt-[10%]">
        {/* Slide 1 */}
        <div className='px-4'>

          <div className="flex flex-col items-center justify-between space-x-5 space-y-2 md:space-y-0 md:flex-row">
           <div className='flex flex-col items-start order-2 space-y-3 text-white md:order-none'>
            <p className='px-2 py-1 text-lg font-semibold uppercase bg-red-500' >Descover now</p>
            <p className='text-4xl font-bold capitalize lg:text-7xl'>aerobat fore-axis mini drone</p>
            <p className='pb-5 text-lg font-semibold capitalize '>the brand comes from the google home collection 2021</p>
            <button className='px-4 py-3 font-semibold text-black uppercase bg-white rounded-md hover:bg-red-500 hover:text-white '>book now</button>
           </div>

           <div className='order-1 md:w-full md:order-none'>
            <img src={drone} alt="drone" />
           </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='px-4'>
          
          <div className="flex flex-col items-center justify-between space-x-5 space-y-2 md:space-y-0 md:flex-row">
           <div className='flex flex-col items-start order-2 space-y-3 text-white md:order-none'>
            <p className='px-2 py-1 text-lg font-semibold uppercase bg-red-500' >Descover now</p>
            <p className='text-4xl font-bold capitalize lg:text-7xl'>the best 4k gaming monitor</p>
            <p className='pb-5 text-lg font-semibold capitalize '>Camion Gaming Monitor - Affordable Performance for Gamers</p>
            <button className='px-4 py-3 font-semibold text-black uppercase bg-white rounded-md hover:bg-red-500 hover:text-white '>book now</button>
           </div>

           <div className='flex items-center justify-center order-1 w-full md:order-none'>
            <img src={monitor} alt="monitor" />
           </div>
          </div>
        </div>


      </Slider>
    </div>
  );
};

export default HomeSlider;
