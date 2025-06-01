import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import Model from './Components/Model';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const[isModelOpen ,setIsModelOpen] = useState(false)

   const openModel = ()=>{
    setIsModelOpen(true)

   }

   const closemodel =()=>{
    setIsModelOpen(false)
   }

  return (
    <>
      <nav className='w-full h-16 px-6 md:px-24 flex justify-between items-center bg-blue-950 fixed top-0 z-50 tracking-[0.05em]'>

        {/* Logo */}
        <div className="text-white font-bold text-xl cursor-pointer">
          ESTATE<span className='text-orange-500'>HOUSE</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-white text-sm'>
          <NavLink to="/" onClick={closeMenu}><li className='hover:text-orange-400 cursor-pointer'>HOME  </li></NavLink>
          <NavLink to="/About" onClick={closeMenu}><li className='hover:text-orange-400 cursor-pointer'>ABOUT </li></NavLink>
          <NavLink to="/Service" onClick={closeMenu}><li className='hover:text-orange-400 cursor-pointer'>SERVICE</li></NavLink>
          <NavLink to="/FindAgent" onClick={closeMenu}><li className='hover:text-orange-400 cursor-pointer'>FIND AGENT  </li></NavLink>
          <NavLink to="/Contact" onClick={closeMenu}><li className='hover:text-orange-400 cursor-pointer'>CONTACT  </li></NavLink>
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:flex">
          <button className='border border-orange-500 px-6 py-1 rounded-lg text-white text-sm cursor-pointer hover:bg-amber-50 hover:text-gray-950 transition-colors font-semibold' onClick={openModel}>LOGIN</button>
        </div>

        {/* Model open */}

        <Model isOpen={isModelOpen} onClose={closemodel}/>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <ListIcon />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-blue-950 px-6 py-4 z-40">
          <ul className="flex flex-col gap-4 text-white text-base">
            <NavLink to="/" onClick={closeMenu}><li className='hover:text-orange-400'>HOME</li></NavLink>
            <NavLink to="/About" onClick={closeMenu}><li className='hover:text-orange-400'>ABOUT</li></NavLink>
            <NavLink to="/Service" onClick={closeMenu}><li className='hover:text-orange-400'>SERVICE</li></NavLink>
            <NavLink to="/FindAgent" onClick={closeMenu}><li className='hover:text-orange-400'>FIND AGENT</li></NavLink>
            <NavLink to="/Contact" onClick={closeMenu}><li className='hover:text-orange-400'>CONTACT</li></NavLink>
            <button className='mt-2 border border-orange-500 px-4 py-2 rounded-lg text-white text-sm'>LOGIN</button>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar;
