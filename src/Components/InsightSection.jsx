import React from 'react'
import room1 from '../assets/room1.jpeg'
import room2 from '../assets/room2.jpeg'
import room3 from '../assets/room3.jpeg'
import room4 from '../assets/room4.jpeg'
import room5 from '../assets/room5.jpeg'
import { motion } from 'framer-motion';


const InsightSection = () => {
  return (
    <motion.div className=' flex w-full px-8 md:px-16 lg:px-24 items-center overflow-hidden flex-col mb-10 pt-15'
    
                initial={{
        opacity:0, x:-200,
        }}

        whileInView={{
        opacity:1, x:0,
        }}

        transition={{
          type:"spring",
          stiffness:60, 
          damping:10
         }}>


        <h2 className=' text-orange-500 font-bold underline'>INSIGHT</h2>
        <h1 className=' text-2xl mb-10 font-bold text-center'> Explore Insight And Innovation,<br/> Uncover The Latest </h1>
        <div className=" flex gap-4  w-full lg:w-[80%] flex-col lg:flex-row">
            <div className=" w-full lg:w-[40%] flex flex-col gap-2">
                <img src={room1} alt=""  className='object-cover w-full rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] h-64 transform'/>
               <div className=" items-center  gap-2">
                <h2 className=' font-bold text-[18px] '>The Art of Kitchen Arrangement </h2>
                <p className='text-gray-600'>Planning for coaching, especially for users with different height and needs... </p>
                <button className='text-gray-600 underline hover:text-blue-800 transition-colors'>Read More </button>
               </div>
            </div>
            <div className=" w-full lg:w-[40%]  flex flex-col gap-2">
                <img src={room4} alt=""  className='object-cover w-full rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] h-64 transform'/>
               <div className=" items-center  gap-2">
                <h2 className=' font-bold text-[18px] '>The Art of Kitchen Arrangement </h2>
                <p className='text-gray-600'>Planning for coaching, especially for users with different height and needs... </p>
                <button className='text-gray-600 underline hover:text-blue-800 transition-colors'>Read More </button>
               </div>
            </div>
            <div className="w-full lg:w-[40%]  flex flex-col gap-2">
                <img src={room3} alt=""  className='object-cover w-full rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] h-64 transform'/>
               <div className=" items-center  gap-2">
                <h2 className=' font-bold text-[18px] '>The Art of Kitchen Arrangement </h2>
                <p className='text-gray-600'>Planning for coaching, especially for users with different height and needs... </p>
                <button className='text-gray-600 underline hover:text-blue-800 transition-colors'>Read More </button>
               </div>
            </div>
            <div className=" w-full lg:w-[40%] flex flex-col gap-2">
                <img src={room2} alt=""  className='object-cover w-full rounded-2xl shadow-[0px_18px_10px_-19px_rgba(0,0,0,0.74)] h-64 transform'/>
               <div className=" items-center  gap-2">
                <h2 className=' font-bold text-[18px] '>The Art of Kitchen Arrangement </h2>
                <p className='text-gray-600'>Planning for coaching, especially for users with different height and needs... </p>
                <button className='text-gray-600 underline hover:text-blue-800 transition-colors'>Read More </button>
               </div>
               
            </div>

            
        </div>

    </motion.div>
  )
}

export default InsightSection;