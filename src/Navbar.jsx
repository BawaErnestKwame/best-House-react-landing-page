
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-16 px-24 items-center flex justify-between bg-blue-950 fixed top-0 right-0 left-0 mx-auto z-50 py-4 tracking-[0.05em]'>
        <div className=" flex items-center">
          <h1 className=' font-bold text-xl cursor-pointer text-white'>ESTATE<span className=' text-orange-500'>HOUSE</span></h1>
        </div>
 
        <ul className=' flex text-white gap-8 leading-[1.75] text-sm'>
          <NavLink to="/"> <li className=' hover:text-orange-400 transition-all cursor-pointer'><a>HOME</a></li></NavLink>
          <NavLink to="./About"> <li className=' hover:text-orange-400 transition-all cursor-pointer'><a>ABOUT</a></li></NavLink>
          <NavLink to="./Service"> <li className=' hover:text-orange-400 transition-all cursor-pointer'><a>SERVICE</a></li></NavLink>
          <NavLink to="./Product"> <li className=' hover:text-orange-400 transition-all cursor-pointer'><a>PRODUCT</a></li></NavLink>
          <NavLink to="./Contact"> <li className=' hover:text-orange-400 transition-all cursor-pointer'><a>CONTACT</a></li></NavLink>
         
       
      
        </ul>

        <div className=" flex text-white items-center text-sm">
          <button className=' border border-orange-500 px-6 tracking-[0.05em] py-1 text-sm rounded-lg cursor-pointer'>LOGIN</button>
        </div>


      </nav>

    </>
  )
}

export default Navbar