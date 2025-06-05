import React from 'react';
import house from '../assets/house7.jpeg';
import { motion } from 'framer-motion';

const ConfortSection = () => {
  return (
    <>
      <motion.div className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-16 lg:px-24 mt-32 mb-20"
      
               initial={{
        opacity:0, y:100,
        }}

        whileInView={{
        opacity:1, y:0,
        }}

        transition={{
        duration: .8
         }}

          viewport={{once:true}}
         
         >
        
  

        {/* Text Content */}
        <motion.div className="w-full md:w-1/2 space-y-4" 
                 initial={{
        opacity:0, x:-200,
        }}

        whileInView={{
        opacity:1, x:0,
        }}

        transition={{
        duration: .8
         }}

          viewport={{once:true}}
        
        >
          <h2 className="text-orange-600 font-semibold tracking-wide"> EXTREME COMFORT</h2>
          <h1 className="text-3xl lg:text-3xl font-bold leading-snug text-gray-900">
            FIND A PERFECT PLACE<br/> TO CALL HOME 
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
        opacity:1, y:0,
        }}

         viewport={{once:true}}

        transition={{
        duration: 1
         }}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition">
              Browse Now
            </button>
            <button className="border border-gray-300 text-orange-500 px-6 py-2 rounded-md font-medium hover:bg-amber-50 hover:text-gray-900 transition">
              See Details
            </button>
          </motion.div>
        </motion.div>



              {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={house}
            alt="Luxury House"
            className="w-full h-[70vh] object-cover rounded-3xl shadow-[-6px_18px_12px_-19px_rgba(0,0,0,0.74)] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </>
  );
};

export default ConfortSection;

