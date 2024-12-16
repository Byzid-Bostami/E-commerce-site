import React from 'react'
import Marquee from "react-fast-marquee";

import brand1 from '../assets/home/brand-1.png';
import brand2 from '../assets/home/brand-2.png';
import brand3 from '../assets/home/brand-3.png';
import brand4 from '../assets/home/brand-4.png';
import brand5 from '../assets/home/brand-5.png';
import brand6 from '../assets/home/brand-6.png';


const CompaniSlider = () => {
  return (
    <div className='container px-4 py-6 mx-auto md:px-6 lg:px-8'>
       <Marquee pauseOnHover={true} speed={40}>

        <div className='flex space-x-5'>
            <p></p>
        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand1} alt="brand1" />
        </div>

        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand2} alt="brand2" />
        </div>
        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand3} alt="brand3" />
        </div>
        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand4} alt="brand4" />
        </div>
        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand5} alt="brand5" />
        </div>
        <div className='h-full px-2 py-1 border border-black/15'>
            <img className=' filter grayscale hover:grayscale-0' src={brand6} alt="brand6" />
        </div>
        </div>
        
       </Marquee> 
    </div>
  )
}

export default CompaniSlider