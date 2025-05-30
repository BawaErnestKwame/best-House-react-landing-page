import React from 'react'
import aboutimg from '../assets/aboutimg6.jpeg'

const Service = () => {
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



    </>
  )
}

export default Service