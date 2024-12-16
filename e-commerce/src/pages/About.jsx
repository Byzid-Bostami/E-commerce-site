import React, { useEffect } from 'react'

import about1 from '../assets/about/about1.jpg';
import icon1 from '../assets/about/icon1.png';
import icon2 from '../assets/about/icon2.png';
import icon3 from '../assets/about/icon3.png';
import icon4 from '../assets/about/icon4.png';
import person1 from '../assets/about/person1.png';
import person2 from '../assets/about/person2.png';
import person3 from '../assets/about/person3.png';
import person4 from '../assets/about/person4.png';
import person5 from '../assets/about/person5.png';
import Footer from '../layout/Footer';

import { FaTwitter, FaPinterestP, FaGooglePlusG  } from "react-icons/fa";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-white'>
      <div className='container px-4 pt-16 mx-auto md:pt-[50px] md:px-8 pb-3'>
        <img className='pb-2 -z-10'  src={about1} alt="about1" />

        <div className='flex flex-col px-4 space-y-3 pb-14 md:relative md:px-16'>
          <h4 className='self-center p-5 px-3 text-3xl font-semibold bg-white md:text-4xl lg:absolute -top-20 text-black/85'>
          Find Out More About Butterfly's Birth History And Historic Mission
          </h4>
          <p className='text-xl font-medium'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, aperiam arm eaquen ipsa quae inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p className='text-gray-600'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt. Et harum quidem rerum facilis est et expedita distinctio. Nam et libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quond minus id quod maxime placeat facere.possimus. Et harum quidem rerum omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
          <h4 className='text-xl font-bold'>
          Our Mission
          </h4>
          <p className='text-gray-600'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia day deserunt mollit anim id est laborum. Sed et ut perspiciatis unde omnis iste natus error sit voluptatem accusantium an doloremque laudantium, totam rem aperia quae illo inventore. Veritatis quasi ccusanti architecto beatae vitae dicta sunt explicabo. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee the pain.</p>
          <h4 className='text-xl font-bold'>
          Our Vision
          </h4>
          <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem products accusantium an doloremque laudantium, totam rem an aperiam, ant eaque ipsa quae ab illo inventore veritati quasi architecto beatae vitae dicta sunt give you everythings explicabo. But I must explain to you how all this mistaken of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth human happiness.
          </p>
        </div>


        <div className='bg-[#F9F9F9] py-14 w-full flex flex-col space-y-7 items-center px-4'>
          <h3 className='text-3xl font-bold text-center uppercase md:text-4xl text-black/85'>why choose us?</h3>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:pt-6'>
            <div className='space-y-3'>
              <img src={icon1} alt="icon1" />
              <p className='font-bold '>A Dedicated Smart-Dashboard</p>
              <p className='text-sm text-gray-500'>Manage donors, donations, send ‘thank you’ notes to well-wishers much more</p>
            </div>

            <div className='space-y-3'>
              <img src={icon2} alt="icon1" />
              <p className='font-bold '>Withdraw Funds Instantly</p>
              <p className='text-sm text-gray-500'>Transfer donations instantly to your bank account, with just one click</p>
            </div>

            <div className='space-y-3'>
              <img src={icon3} alt="icon1" />
              <p className='font-bold '>Intuitive User Experience</p>
              <p className='text-sm text-gray-500'>Designed to optimise donation flow, help you reach your goal faster</p>
            </div>

            <div className='space-y-3'>
              <img src={icon4} alt="icon1" />
              <p className='font-bold '>International Payment Support</p>
              <p className='text-sm text-gray-500'>Donors can use use payment modes such as PayTM, Tez, UPI, Debit Card, Credit,...</p>
            </div>
          </div>
        </div>



        <div className='flex flex-col space-y-5 md:px-4 py-14'>

          <h3 className='text-3xl font-bold text-center uppercase md:text-4xl text-black/85'>our team</h3>

          <div className='grid grid-cols-2 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-5'>

            <div className='flex flex-col items-center space-y-2 group'>
            <div className='relative rounded-full'>
              <img src={person1} alt="person1" />

              <div className='absolute top-0 flex items-center justify-center w-full h-full space-x-1 text-3xl transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-200/25'>
                <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
              </div>
            </div>

            <p className='font-bold hover:text-red-500'>Francis Zimmerman</p>
            <p className='text-gray-500'>CEO & Founder</p>
            </div>

            <div className='flex flex-col items-center space-y-2 group'>
            <div className='relative rounded-full'>
              <img src={person2} alt="person1" />

              <div className='absolute top-0 flex items-center justify-center w-full h-full space-x-1 text-3xl transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-200/25'>
                <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
              </div>
            </div>

            <p className='font-bold hover:text-red-500'>Timmy Morrison</p>
            <p className='text-gray-500'>Marketing</p>
            </div>

            <div className='flex flex-col items-center space-y-2 group'>
            <div className='relative rounded-full'>
              <img src={person3} alt="person1" />

              <div className='absolute top-0 flex items-center justify-center w-full h-full space-x-1 text-3xl transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-200/25'>
                <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
              </div>
            </div>

            <p className='font-bold hover:text-red-500'>Crystal Buchanan</p>
            <p className='text-gray-500'>Tech Leader</p>
            </div>

            <div className='flex flex-col items-center space-y-2 group'>
            <div className='relative rounded-full'>
              <img src={person4} alt="person1" />

              <div className='absolute top-0 flex items-center justify-center w-full h-full space-x-1 text-3xl transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-200/25'>
                <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
              </div>
            </div>

            <p className='font-bold hover:text-red-500'>Darrel French</p>
            <p className='text-gray-500'>Manager</p>
            </div>

            <div className='flex flex-col items-center space-y-2 group'>
            <div className='relative rounded-full'>
              <img src={person5} alt="person1" />

              <div className='absolute top-0 flex items-center justify-center w-full h-full space-x-1 text-3xl transition-opacity duration-200 rounded-full opacity-0 group-hover:opacity-100 bg-zinc-200/25'>
                <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
              </div>
            </div>

            <p className='font-bold hover:text-red-500'>Gabriel Barker</p>
            <p className='text-gray-500'>Designer</p>
            </div>

          </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default About