import React from 'react'
import header from './assets/header2.jpeg'
import Navbar from './Navbar' // Import Navbar
import TrustedClient from './Pages/TrustedClient'
import Luxury from './Pages/Luxury'
import ConfortSection from './Pages/ConfortSection'
import ExpectGuides from './Pages/ExpectGuides'
import RequirementSection from './Pages/RequirementSection'
import InsightSection from './Pages/InsightSection'
import Accordion from './Pages/Accordion'
import TestimonialsSection from './Pages/TestimonialsSection'

const Header = () => {
  return (

    <>
<div
  className="w-full h-screen bg-cover bg-center text-white px-4 sm:px-8 lg:px-24 pt-12 md:pt-16 lg:pt-24 relative"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${header})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>


    
      {/* MAIN CONTENT */}
      <div className="mt-20">
        <h1 className="text-5xl font-bold mb-4 leading-15">
          EXCEPTIONAL HOMES FOR<br />
          EXCEPTIONAL LIVES
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Discover your dream with our easy-to-use real estate platform.
          <br />
          Browse listings, compare prices, and connect with trusted agents—all in one place.
        </p>

        <div className="flex gap-4">
          <button className='bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-medium'>Browse Now</button>
          <button className='border border-white px-6 py-2 rounded-lg text-white font-medium hover:bg-amber-50 hover:text-gray-950'>See Details</button>
        </div>
      </div>

      {/* descriptions  */}


<div className=" w-full flex items-center content-center">

      <div className=" w-full flex items-center mt-16 justify-between content-center text-center">
        <div className="">
          <h1 className=' text-3xl font-bold'>120K+</h1>
          <p>Deal Closed</p>
        </div>
        <span className='bg-gray-300 h-20 w-0.5 rounded-xl'></span>
        <div className="">
          <h1 className=' text-3xl font-bold'>20K+</h1>
          <p>Customers</p>
        </div>
        <span className='bg-gray-300 h-20 w-0.5 rounded-xl'></span>
        <div className="">
          <h1 className=' text-3xl font-bold'>1500K+</h1>
          <p>House Sold</p>
        </div>
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
