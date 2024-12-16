import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import contactBanner from '../assets/contact/contactBanner.png';
import Footer from '../layout/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      
      <div className="w-full h-[280px] bg-center bg-cover space-y-2 container flex flex-col items-center justify-center px-4 pt-16 mx-auto md:pt-[77px] md:px-8 pb-3" style={{ backgroundImage: `url(${contactBanner})` }}>
          <p className='text-4xl font-semibold text-center text-white'>Contact Us</p>
          <p className='text-white'>
            <Link className='hover:text-red-700' to='/'>HOME</Link> / Contact 
          </p>
      </div>

      
      <div className="container px-4 mx-auto py-14 md:px-8">
        <div className='flex flex-col items-center space-y-10 pb-14'>
          <p className='text-3xl font-bold text-gray-900 uppercase'>Call Us Or Visit Place</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-9'>
            
            <div className='flex flex-col items-center space-y-1'>
              <p className='text-lg font-bold uppercase'>Address</p>
              <p className='text-gray-500'>139 Brook Drive South Richmond</p>
              <p className='text-gray-500'>Hill, New York</p>
            </div>
            
            <div className='flex flex-col items-center space-y-1'>
              <p className='text-lg font-bold uppercase'>Email</p>
              <p className='text-gray-500'>digita@support.com</p>
              <p className='text-gray-500'>contact@example.com</p>
            </div>

            <div className='flex flex-col items-center space-y-1'>
              <p className='text-lg font-bold uppercase'>Phone</p>
              <p className='text-gray-500'>(+084) 859-481-3614</p>
              <p className='text-gray-500'>(+084) 908-767-8437</p>
            </div>

            <div className='flex flex-col items-center space-y-1'>
              <p className='text-lg font-bold uppercase'>Openning Time</p>
              <p className='text-gray-500'>Monday – Saturday: 8am – 4pm</p>
              <p className='text-gray-500'>Sunday: 9am – 5pm</p>
            </div>

          </div>
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37514.858760106894!2d-0.16937855495823917!3d51.49302249195109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sbd!4v1732343144532!5m2!1sen!2sbd"
            width="100%"
            height="600"
            style={{ border: 0, filter: 'grayscale(100%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

          <div className=' flex flex-col space-x-7 py-5 px-8 justify-center bg-[#F5F5F5]'>
            <h4 className='text-3xl font-bold text-center uppercase'>Send Us A Message</h4>
            
            <form className='pt-5 space-y-6 '>
              <div className='flex w-full space-x-5'>
                <label className='flex flex-col w-1/2 space-y-3 lg:w-full'  htmlFor="text"> <span>Your Name</span>
                  <input className='p-2 outline-none ring-1 ring-black/5 hover:ring-1 focus:ring-blue-500/80' type="text" placeholder='Your Name' required />
                </label>

                <label className='flex flex-col w-1/2 space-y-3 lg:w-full'  htmlFor="email"> <span>Your Email</span>
                  <input className='p-2 outline-none ring-1 ring-black/5 hover:ring-1 focus:ring-blue-500/80' type="email" placeholder='Yourmail@demo.com' required />
                </label>
              </div>

              <label className='flex flex-col w-full space-y-3'  htmlFor="text"> <span>Subject</span>
                  <input className='p-2 outline-none ring-1 ring-black/5 hover:ring-1 focus:ring-blue-500/80' type="text" placeholder='Your Subject' required />
              </label>

              <label className='flex flex-col w-full space-y-3'  htmlFor="text"> <span>message</span>
                <textarea className='w-full p-2 outline-none ring-1 ring-black/5 hover:ring-1 focus:ring-blue-500/80' name="message" required rows={4} placeholder='Your Message'></textarea>
              </label>
              
              <label className="flex items-center space-x-2">
                <input 
                  className="text-xl cursor-pointer" 
                  type="checkbox" 
                  name="checkbox" 
                  id="subscribe-checkbox" 
                />
                <span className="text-base">Also subscribe us</span>
              </label>

              <button className='py-2 text-white bg-black rounded-md px-7 hover:bg-red-500'>
                Send Message
              </button>

            </form>

          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default Contact;
