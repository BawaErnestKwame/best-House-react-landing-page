import React from 'react'
import aboutimg from '../assets/aboutimg6.jpeg'

const About = () => {
  return (
    <>
      <div
        className="w-full mt-16 py-12 px-4 md:px-8 lg:px-24 h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${aboutimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl mb-4">ABOUT US</h1>
          <p className="text-base leading-relaxed">
            EstateHouse is a real estate platform that helps you find your dream home with ease.
            We connect you with trusted agents, verified listings, and helpful tools to make buying,
            selling, or renting simple and stress-free.
          </p>
        </div>
      </div>

      <div className=" flex gap-14 flex-col md:flex-row py-12 w-full px-4 md:px-8 lg:px-24 justify-between">
        <h1 className='text-3xl  text-gray-900 font-bold'>Our Legacy Of Building Dream</h1>


        <p className='text-gray-700 w-full md:w-2/3'>For over a decade, <b>EstateHouse</b> has stood as a pillar of trust and excellence in the real estate industry. Founded on the belief that finding a home should be personal, simple, and stress-free, we’ve helped countless families, investors, and individuals discover places they can truly call home.

        Our journey began with a single mission: to bridge the gap between people and properties through transparency, dedication, and innovation. Over the years, we've grown into a reliable platform connecting clients with verified listings and experienced agents they can count on.</p>
      </div>

  

          <div className=" flex flex-col px-4 md:px-8 lg:px-24 pb-12 pt-12 mt-20 items-center content-center bg-gray-100">
            {/* works percentage and others  */}
            <div className=" flex justify-between md:flex-row w-[80%] mb-12">
              <div className="">
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </div>
              <div className="">
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </div>
              <div className="">
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </div>
              <div className="">
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </div>

            </div>

            {/* images  */}
            <div className=" ">
              <img src={aboutimg} alt="" className=' h-[50vh] w-250 object-cover rounded-3xl' />

            </div>
          </div>


          {/* our story page */}

          

          <div className="flex flex-col px-4 md:px-8 lg:px-24 pb-12 pt-12 mt-20 items-center align-middle ">

            <h1 className='mb-3 text-3xl text-gray-900 font-bold'>OUR STORY</h1>
              <p className='text-center md:w-[70%] text-base text-gray-700'>At EstateHouse, our story began with a simple idea to make real estate easier, more transparent, and accessible for everyone.

              What started as a small vision quickly grew into a trusted platform helping individuals and families find their dream homes. Driven by a passion for people and property, we set out to connect buyers, sellers, and agents in a way that feels seamless and secure.

              Over the years, we’ve built strong relationships with our clients by staying true to our values: integrity, trust, and excellence. We've grown with the communities we serve, adapting to change and embracing innovation all while keeping people at the heart of what we do.</p>
          </div>
    </>
  )
}

export default About
