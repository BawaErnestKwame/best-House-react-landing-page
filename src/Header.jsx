import React from 'react'
import header from './assets/header2.jpeg'
import Navbar from './Navbar' // Import Navbar
import TrustedClient from './Components/TrustedClient'
import Luxury from './Components/Luxury'
import ConfortSection from './Components/ConfortSection'
import ExpectGuides from './Components/ExpectGuides'
import RequirementSection from './Components/RequirementSection'
import InsightSection from './Components/InsightSection'
import Accordion from './Components/Accordion'
import TestimonialsSection from './Components/TestimonialsSection'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'



const Header = ({isOpen}) => {

  const fadeIn ={
    hidden:{opacity: 0 , y:-800},
    visible:{opacity: 1 , y:0}
  }
  return (

    <>
<div
  className="w-full h-screen md:h-auto lg:h-screen bg-cover bg-center text-white px-4 sm:px-8 lg:px-24 pt-12 md:pt-16 lg:pt-24 relative pb-10"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${header})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>


    
      {/* MAIN CONTENT */}
      <motion.div className="mt-20"
   

      
      
      >
        <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          type:"spring",
          stiffness:50,
          damping:15,

        }}

        viewport={{
          once:false, amount:.8,
        }}
        
        >
        <h1 className=" text-3xl md:text-5xl font-bold leading-12 mb-4 md:leading-15">
          EXCEPTIONAL HOMES FOR<br/>EXCEPTIONAL LIVES <span className=' animate-pulse'>🏡</span>
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Discover your dream with our easy-to-use real estate platform.
          <br />
          Browse listings, compare prices, and connect with trusted agents—all in one place.
        </p>
        </motion.div>

        <motion.div className="flex gap-4"
        initial={{
          opacity:0,
          y:200
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          type:"spring",
          stiffness:50,
          damping:10
        }}


        >
         <Link to="./service"> <button className='bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-medium' >Browse Now</button></Link>
        <Link to='/contact'>  <button className='border border-white px-6 py-2 rounded-lg text-white font-medium hover:bg-amber-50 hover:text-gray-950'>Contact Us</button></Link>
        </motion.div>
      </motion.div>

      {/* descriptions  */}


<div className=" w-full flex items-center content-center">

      <div className=" w-full flex items-center mt-16 justify-between content-center text-center">
        <motion.div className=""
        
        initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        transition={{
          duration:2,
          delay:.5,
        }}

        viewport={{once:true}}
        >
          <h1 className=' text-3xl font-bold'>120K+</h1>
          <p>Deal Closed</p>
        </motion.div>
        <span className='bg-gray-300 h-20 w-0.5 rounded-xl'></span>
        <motion.div className=""
             initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        transition={{
          duration:2,
          delay:1,
        }}
         viewport={{once:true}}
        
        >
          <h1 className=' text-3xl font-bold'>20K+</h1>
          <p>Customers</p>
        </motion.div>
        <span className='bg-gray-300 h-20 w-0.5 rounded-xl'></span>
        <motion.div className=""
             initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        transition={{
          duration:2,
          delay:1.5,
        }}
         viewport={{once:true}}
        
        >
          <h1 className=' text-3xl font-bold'>1500K+</h1>
          <p>House Sold</p>
        </motion.div>
      </div>
      </div>
    </div>

    <TrustedClient/>
    <Luxury/>
    <ExpectGuides/>
    <ConfortSection/>
    <RequirementSection/>
    <InsightSection/>
    <Accordion/>
    <TestimonialsSection/>

    </>
  )
}

export default Header
