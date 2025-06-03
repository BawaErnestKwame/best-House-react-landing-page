import React from 'react'
import CellWifiIcon from '@mui/icons-material/CellWifi';
import HouseIcon from '@mui/icons-material/House';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PercentIcon from '@mui/icons-material/Percent';
import { motion } from 'framer-motion';

const ExpectGuides = () => {
  return (
    <div>
        <motion.div className=" flex items-center content-center px-4 md:px-8 lg:px-24 flex-col mt-20 py-20"
         initial={{
        opacity:0, y:200,
        }}

        whileInView={{
        opacity:1, y:0,
        }}

        transition={{
        duration: .8
         }}
        
        >
            <h2 className=' text-2xl mb-8 font-bold w-80 text-center '>Expect Guides To Find Your Perfect Fit </h2>
            <div className="flex  flex-col w-full md:flex-row gap-4">
                <motion.div className=" bg-gray-200 p-4 border-gray-300 rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] border-2 transform hover:-translate-y-3 hover:border-4 transition-all transform-3d"

                initial={{
                  opacity:0, x:-300,
      
                }}

           

                whileInView={{
                  opacity:1, x:0,
               
                
                }}

                transition={{
                  duration:.5,
                  delay:1.5
                }}
                
                >
                    <HouseIcon className='size-16 text-orange-500 '/>
                  <h2 className='font-bold text-gray-950 text-xl  py-2'>Buy Properties</h2>
                    <p className='text-gray-600 text-base font-medium pb-3'>Our expertise ensures you get the true value of your property through accurate assessments and trusted guidance. Whether you're a first-time buyer or a seasoned investor, we’re here to make your property journey smooth and rewarding.</p>
                    <button className='bg-gray-950 text-white px-4 py-2 outline-none border-none rounded'>Read More</button>
                </motion.div>
                <motion.div className=" bg-gray-200 p-4 border-gray-300 rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] border-2 transform hover:-translate-y-3 hover:border-4 transition-all transform-3d"
                   initial={{
                  opacity:0, x:-200,
      
                }}

           

                whileInView={{
                  opacity:1, x:0,
               
                
                }}

                transition={{
                  duration:.5,
                  delay:1
                }}

                
                
                >
                    <PublishedWithChangesIcon className='size-16 text-orange-500 '/>
                  <h2 className='font-bold text-gray-950 text-xl  py-2'>Rent Properties</h2>
                    <p className='text-gray-600 text-base font-medium pb-3'>Our expertise ensures you get the true value of your property through accurate assessments and trusted guidance. Whether you're a first-time buyer or a seasoned investor, we’re here to make your property journey smooth and rewarding.</p>
                    <button className='bg-gray-950 text-white px-4 py-2 outline-none border-none rounded'>Read More</button>
                </motion.div>

                <motion.div className=" bg-gray-200 p-4 border-gray-300 rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] border-2 transform hover:-translate-y-3 hover:border-4 transition-all transform-3d"
                   initial={{
                  opacity:0, x:-100,
      
                }}

           

                whileInView={{
                  opacity:1, x:0,
               
                
                }}

                transition={{
                  duration:.5,
                  delay:.5
                }}
                
                >
                    <PercentIcon className='size-16 text-orange-500 '/>
                  <h2 className='font-bold text-gray-950 text-xl  py-2'>Sell Properties</h2>
                    <p className='text-gray-600 text-base font-medium pb-3 '>Our expertise ensures you get the true value of your property through accurate assessments and trusted guidance. Whether you're a first-time buyer or a seasoned investor, we’re here to make your property journey smooth and rewarding.</p>
                    <button className='text-sm bg-gray-950 text-white px-4 py-2 outline-none border-none rounded'>Read More</button>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default ExpectGuides