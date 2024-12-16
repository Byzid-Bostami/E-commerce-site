import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTwitter, FaPinterestP, FaGooglePlusG, FaFacebookF  } from "react-icons/fa";

import pyment from '../assets/footer/payment.png'

const Footer = () => {
  return (
    <div className=' bg-blue-950'>
        <div className='container px-4 mx-auto md:px-8 py-14'>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6'>

                <div className='flex flex-col space-y-7'>
                    <h3 className='text-xl font-bold text-white uppercase'>Company Info</h3>

                    <div className='flex flex-col space-y-3'>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>About us</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Contact us</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>blogs</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Business With Us</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Find a Store</span></p>
                    </div>

                </div>

                <div className='flex flex-col space-y-7'>
                    <h3 className='text-xl font-bold text-white uppercase'>Let Us Help You</h3>

                    <div className='flex flex-col space-y-3'>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Orders</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Downloads</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Addresses</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Account Details</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Lost Password</span></p>
                    </div>

                </div>

                <div className='flex flex-col space-y-7'>
                    <h3 className='text-xl font-bold text-white uppercase'>Quick Links</h3>

                    <div className='flex flex-col space-y-3'>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Special Offers</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Gift Cards</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Privacy Policy</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Teams of Use</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>PortFolio</span></p>
                    </div>

                </div>

                <div className='flex flex-col space-y-7'>
                    <h3 className='text-xl font-bold text-white uppercase'>UserFull Links</h3>

                    <div className='flex flex-col space-y-3'>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Lastest Products</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Top rating</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Best selling</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>Featured Products</span></p>
                        <p className='flex items-center space-x-1 text-gray-300 cursor-pointer hover:text-red-500'><span><MdKeyboardArrowRight /></span> <span>New collections</span></p>
                    </div>

                </div>

                <div className='flex flex-col col-span-2 space-y-7'>
                <h3 className='text-xl font-bold text-white uppercase'>singup for newsletter</h3>
                <p className='text-gray-300'>Subscribe to the weekly newsletter for all the latest updates & get a 10% off bill offers.</p>
                <form className='flex w-full'>
                    <input className='w-full p-3 outline-none' type="text" required placeholder='Enter Your Email...' />
                    <button type='submit' className='px-5 py-3 font-medium text-white uppercase bg-red-500'>Subscribe</button>
                </form>
                <div className='flex items-center space-x-4'>
                    <p className='text-gray-300 capitalize'>Or follow us:</p>
                    <div className='flex space-x-3 text-3xl'>
                    <FaFacebookF className='p-1 text-white bg-blue-700 rounded-full cursor-pointer' />
                    <FaTwitter className='p-1 text-white bg-blue-500 rounded-full cursor-pointer' />
                    <FaPinterestP className='p-1 text-white bg-red-500 rounded-full cursor-pointer' />
                    <FaGooglePlusG className='p-1 text-white bg-red-400 rounded-full cursor-pointer' />
                    </div>
                </div>
                </div>

            </div>

        </div>
        
        <div className='border-t border-white/30'>
            <div className='container px-4 py-5 mx-auto md:px-8'>
                <div className='flex flex-col items-center justify-between space-y-4 lg:flex-row md:space-y-0'>
                    <p className='text-gray-300 capitalize'>copyright &copy; 2024 <span className='font-medium text-white uppercase'>Egohost</span> - all  Rights Reserved by <span className='font-medium text-white uppercase'>Byzid Bostami</span></p>
                    <img src={pyment} alt="pyment" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer