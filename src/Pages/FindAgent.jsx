import React from 'react';
import hero from '../assets/hero.webp';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

const FindAgent = () => {
  return (
    <>
      {/* Top Section */}
      <motion.div
        className='w-full flex px-4 md:px-8 lg:px-24 mt-15 h-auto py-8'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 60, damping: 10 }}
      >
        <div className='w-full flex flex-col md:flex-row bg-gray-200 p-8 rounded-2xl gap-12'>

          {/* Left Text Content */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 10 }}
            viewport={{ once: true }}
          >
            <h1 className='text-gray-800 font-bold text-4xl mb-3'>
              Search and compare real estate agents
            </h1>
            <p className='text-gray-600 text-base mb-4'>
              Whether you're starting your search or already have someone in mind, you can compare sales agents, property managers or agencies before making your decision.
            </p>

            {/* Search Input */}
            <div className="flex items-center gap-2 border-2 border-gray-400 rounded p-2 bg-gray-200 text-gray-600">
              <SearchIcon className='text-gray-600' />
              <input
                type="text"
                placeholder='Search by Region, Name, Suburb or Postcode'
                className='w-full outline-none border-none'
              />
            </div>

            <button className='bg-orange-600 hover:bg-orange-700 transition-all mt-8 text-white w-full p-3 rounded-2xl'>
              Search...
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 60, damping: 10 }}
            viewport={{ once: true }}
          >
            <img src={hero} alt="" className='object-cover' />
          </motion.div>
        </div>
      </motion.div>

      {/* Selling Your Place Section */}
      <motion.div
        className="w-full px-4 md:px-8 lg:px-24 pb-12 items-center justify-center content-center h-auto mt-8 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 10 }}
        viewport={{ once: true }}
      >
        <h1 className='text-gray-800 font-bold text-3xl mb-2'>Selling Your Place?</h1>
        <p className='text-gray-600 mb-4'>Compare real estate agents before you’re sold on one.</p>

        {/* 3 Steps Cards */}
        <div className="flex flex-wrap gap-4 w-full">
          {[
            {
              title: "Search for an agent",
              desc: "Enter your suburb to find agents specialised in your area.",
            },
            {
              title: "Compare their stats",
              desc: "Compare agent stats and their reviews to see who might be right for you.",
            },
            {
              title: "Connect with the best",
              desc: "Get a free market appraisal from agents before making your decision.",
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="w-full mt-4 md:w-[30%] bg-gray-100 p-4 rounded-2xl shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (i + 1), type: 'spring', stiffness: 60, damping: 10 }}
              viewport={{ once: true }}
            >
              <h1 className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold mb-3'>{i + 1}</h1>
              <h1 className='text-gray-900 font-bold mb-1 text-xl'>{item.title}</h1>
              <p className='text-gray-600'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search Agency Section */}
      <motion.div
        className="w-full flex items-center content-center justify-center my-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 60, damping: 10 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 rounded-2xl shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] border border-gray-400 p-12">
          <h1 className='text-gray-800 font-bold mb-2 text-2xl'>Already Have Agencies In Mind</h1>
          <p className='text-gray-600'>Search an agency by their name and explore the agents that work there.</p>

          <div className="mt-7 flex gap-4 relative">
            <SearchIcon className='text-gray-600 absolute top-2 left-2' />
            <input type="text" placeholder='Search Agency here' className='w-full outline-none py-2 border border-gray-600 rounded pl-8' />
            <button className='border border-gray-600 rounded px-6 text-gray-600'>Search</button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FindAgent;
