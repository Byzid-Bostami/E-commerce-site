import React, { useEffect } from 'react';
import HomeSlider from '../components/HomeSlider';
import FeaturePoducts from '../components/FeaturePoducts';
import vesualReality from '../assets/home/vesualReality.jpg';
import earphone from '../assets/home/earphone.png';
import CountdownClock from '../components/CountDownClock';
import icon1 from '../assets/home/icon1.png';
import icon2 from '../assets/home/icon2.png';
import icon3 from '../assets/home/icon3.png';
import icon4 from '../assets/home/icon4.png';
import ClientReviewSlider from '../components/ClientReviewSlider';
import Footer from '../layout/Footer';
import CompaniSlider from '../components/CompaniSlider';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='bg-white'>
      <HomeSlider />
      <FeaturePoducts />

      <div className='container grid grid-cols-1 gap-5 px-4 mx-auto md:grid-cols-2 md:px-6 pb-14'>
      <div className='relative h-full overflow-hidden rounded-lg group'>
          <img
            className='object-cover w-full h-full transition-all duration-500 rounded-lg group-hover:scale-110'
            src={vesualReality}
            alt='vesualReality'
          />
          <div className='absolute top-0 left-0 w-full h-full transition-all duration-500 rounded-lg group-hover:bg-black/15'>
          <div className='absolute p-3 bottom-2 right-1'>
            <CountdownClock />
          </div>
          </div>
          <div className='absolute flex flex-col items-start space-y-3 transition-all duration-500 top-12 left-6 group-hover:top-16 lg:group-hover:top-24'>
            <p className='font-bold tracking-widest text-white uppercase'>limited edition</p>
            <p className='lg:text-[43px] text-3xl leading-none font-bold text-white capitalize pb-2 lg:pb-4'>
              virtual reality <br /> glasses
            </p>
            <button className='py-3 font-semibold text-black capitalize transition-colors duration-200 bg-white rounded-md px-7 hover:bg-red-500 hover:text-white'>
              Shop now
            </button>
          </div>
        </div>

        <div className='relative h-full overflow-hidden rounded-lg group'>
          <img
            className='object-cover w-full h-full transition-all duration-500 rounded-lg group-hover:scale-110'
            src={earphone}
            alt='Earphone'
          />
          <div className='absolute top-0 left-0 w-full h-full transition-all duration-500 rounded-lg group-hover:bg-black/15'></div>
          <div className='absolute flex flex-col items-start space-y-3 transition-all duration-500 top-12 left-6 group-hover:top-16 lg:group-hover:top-24'>
            <p className='font-bold tracking-widest text-white uppercase'>collection ss21</p>
            <p className='lg:text-[43px] text-3xl leading-none font-bold text-white capitalize pb-2 lg:pb-4'>
              put the world <br /> on mute
            </p>
            <button className='py-3 font-semibold text-black capitalize transition-colors duration-200 bg-white rounded-md px-7 hover:bg-red-500 hover:text-white'>
              Shop now
            </button>
          </div>
        </div>
      </div>


      <div className='container px-4 mx-auto pb-14 md:px-6 '>
        <div className='grid grid-cols-2 gap-4 border rounded-lg p-7 lg:grid-cols-4 border-black/15'>
          <div className='flex items-center p-2 space-x-4 border-r border-black/15 '>
            <img className='hidden w-1/6 lg:block' src={icon1} alt="icon1" />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold uppercase '>Free Delivery</p>
              <p className='text-gray-400'>For all oders over $99</p>
            </div>
          </div>

          <div className='flex items-center space-x-4 lg:border-r border-black/15 '>
            <img className='hidden w-1/6 lg:block' src={icon2} alt="icon2" />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold uppercase '>90 Days Return</p>
              <p className='text-gray-400'>If goods have problems</p>
            </div>
          </div>

          <div className='flex items-center space-x-4 border-r border-black/15 '>
            <img className='hidden w-1/6 lg:block' src={icon3} alt="icon3" />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold uppercase '>Secure Payment</p>
              <p className='text-gray-400'>100% secure payment</p>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <img className='hidden w-1/6 lg:block' src={icon4} alt="icon4" />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold uppercase '>24/7 Support</p>
              <p className='text-gray-400'>Always ready to help</p>
            </div>
          </div>
          
        </div>
      </div>

     
      <ClientReviewSlider />

      <CompaniSlider />

    </div>
    <Footer />
    </>
  );
};

export default Home;
