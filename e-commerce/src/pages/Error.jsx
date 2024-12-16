import React from 'react'
import {NavLink} from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-12 space-y-3'>
      
      <p className='md:text-[160px] text-[120px] text-red-600 font-bold' >
        Oops!
      </p>

      <p className='space-x-4 text-2xl font-bold uppercase'>
        <span>404</span>
        
        <span>page not found</span>
      </p>

      <NavLink className={"uppercase py-2 font-medium  hover:bg-violet-700 px-3 rounded-2xl bg-violet-500 text-white"} to='/'>
          Back to  home
      </NavLink>

      
    </div>
  )
}

export default Error