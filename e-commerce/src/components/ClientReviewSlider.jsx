import React from 'react'
import ClientReview from '../assets/home/clientReview.jpg';
import iconTitle from '../assets/home/icon-title.png';
import naomi from '../assets/home/naomi.webp';
import rina from '../assets/home/rina.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import StarRating from './StarRating';


const ClientReviewSlider = () => {
    const settings = {
        arrows: true,
        dots: false,          
        infinite: true,    
        speed: 500,         
        slidesToShow: 1,    
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
  return (
    <div className="flex items-center w-full h-auto space-y-4 overflow-hidden bg-center bg-cover bg-black/40 bg-blend-overlay" style={{ backgroundImage: `url(${ClientReview})` }}>
        <div className='container flex flex-col items-center px-4 mx-auto space-y-5 md:px-6 py-14'>

            <h3 className='text-3xl font-bold text-center text-white uppercase '>WHAT Client SAY</h3>
            <img className='text-center ' src={iconTitle} alt="iconTitle" />
        <Slider {...settings} className="w-full px-3 lg:px-8 md:px-5" >
            <div>
                <div className='flex flex-col items-center space-y-5'>
                    <p className='text-xl font-medium leading-9 text-center text-white capitalize'>This e-commerce site is fantastic! The user interface is clean and easy to navigate, making my shopping experience seamless. I found exactly what I needed, and the checkout process was a breeze. Plus, my order arrived on time, perfectly packaged. Customer service was quick to respond to my queries, and they went above and beyond to ensure I was satisfied. I’ll definitely be coming back for more!</p>
                    <div className='flex space-x-3'>
                    <div className='flex items-center justify-center w-20 h-20 overflow-hidden rounded-full'><img className='object-cover w-full h-full' src={naomi} alt="naomi" /></div>

                        <div className='flex flex-col space-y-2'>
                            <p className='font-bold text-white uppercase'>naomi hamilton</p>
                            <p className='text-gray-100 capitalize'>customer</p>
                            <StarRating rating={5} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center space-y-5'>
                    <p className='text-xl font-medium leading-9 text-center text-white capitalize'>I couldn’t be happier with my experience! The product quality exceeded my expectations, and the pricing was super competitive. I appreciated the variety of payment options and detailed product descriptions, which made decision-making so much easier. Shipping was lightning fast, and I even got a discount on my first order. Highly recommend this site to anyone looking for reliable service and great products!</p>
                    <div className='flex space-x-3'>
                    <div className='flex items-center justify-center w-20 h-20 overflow-hidden rounded-full'><img className='object-cover w-full h-full' src={rina} alt="rina" /></div>

                        <div className='flex flex-col space-y-2'>
                            <p className='font-bold text-white uppercase'>rina layke</p>
                            <p className='text-gray-100 capitalize'>customer</p>
                            <StarRating rating={5} />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    </div>
  )
}

export default ClientReviewSlider