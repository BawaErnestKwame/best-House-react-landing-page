import React from 'react';
import house from '../assets/house8.jpeg';
import { motion } from 'framer-motion';

const Luxury = () => {
  return (
    <>
      {/* Ultimate Luxury Section */}
      <motion.div className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-16 lg:px-24 mt-32 mb-20"
      initial={{
        opacity:0, y:100,
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.8,
      }}
      
      >
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={house}
            alt="Luxury House"
            className="w-full h-[70vh] object-cover rounded-3xl shadow-[-6px_18px_12px_-19px_rgba(0,0,0,0.74)] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-orange-600 font-semibold tracking-wide"> ULTIMATE LUXURY</h2>
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug text-gray-900">
            EXCEPTIONAL HOMES FOR<br />
            EXCEPTIONAL LIVES
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            From cozy apartments to luxury villas, we bring you the best properties across the city.
            Explore listings that match your lifestyle and budget. Transparent deals, expert guidance,
            and a hassle-free experience. Whether you're buying, selling, or renting—we've got you covered.
          </p>

          <motion.div className="flex gap-4 pt-4"
                initial={{
                    opacity:0, y:100,
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    duration:0.8,
                  }}
          
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition">
              Browse Now
            </button>
            <button className="border border-gray-300 text-orange-500 px-6 py-2 rounded-md font-medium hover:bg-amber-50 hover:text-gray-900 transition">
              See Details
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Luxury;
