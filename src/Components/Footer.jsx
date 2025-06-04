import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';

const Footer = () => {
  

    const handleScroll = ()=>{
        window.scroll(
            0, 0,
        )
    }

  
  return (
    <motion.div className='bg-gray-950 px-8 md:px-16 lg:px-24 text-white pt-16 pb-4'


        initial={{
        opacity:0, y:200,
        }}

        whileInView={{
           opacity:1, y:0,
        }}

        transition={{
           duration: 1
         }}
    
    
    >
        <div className=" flex justify-between flex-wrap gap-4">
            <motion.div className="md:w-1/3 lg:w-1/3 w-full"
               initial={{
                opacity:0, x:-200,
                }}

        whileInView={{
           opacity:1, x:0,
        }}

        transition={{
           duration: 1
         }}


            
            >
                 <h1 className=' font-bold text-xl cursor-pointer text-white'>ESTATE<span className=' text-orange-500'>EASE</span></h1>
                 <p className='text-white text-sm mt-3'> Discover your dream property with our easy-to-use real estate Platform. Browse Listings, Compare Price and connect with trusted agents in one place </p>
            </motion.div>

            <div className=" flex gap-16 flex-wrap relative">
                <motion.div className=" flex flex-col" 
                initial={{
                    opacity:0,
                    y:100,

                }}
                

                whileInView={{
                    opacity:1,
                    y:0,

                }}

                
                transition={{
                    duration:0.5,
                    duration:.5

                 }}


                
                >
                    <h1>PAGES</h1>

                <div className=" flex flex-col text-sm mt-2">

                <Link className='hover:text-orange-600 transition-colors'> Header</Link>
                <Link className='hover:text-orange-600 transition-colors'> Accordion</Link>
                <Link className='hover:text-orange-600 transition-colors'>Comfort</Link>
                <Link className='hover:text-orange-600 transition-colors'>Expected Guide</Link>
                <Link className='hover:text-orange-600 transition-colors'> Insight</Link>
                <Link className='hover:text-orange-600 transition-colors'> Requirement</Link>
                </div>
                </motion.div>

                <motion.div className=" flex flex-col"
                initial={{
                    opacity:0,
                    y:100,

                }}
                

                whileInView={{
                    opacity:1,
                    y:0,
                }}

                transition={{
                    duration:0.5,
                    duration:.8

                 }}
                
                >
                <h1>Components</h1>

                <div className=" flex flex-col text-sm mt-1">
                <Link className='hover:text-orange-600 transition-colors'> Home</Link>
                <Link className='hover:text-orange-600 transition-colors'> About</Link>
                <Link className='hover:text-orange-600 transition-colors'>Service</Link>
                <Link className='hover:text-orange-600 transition-colors'> Product</Link>
                <Link className='hover:text-orange-600 transition-colors'> Contact</Link>
                </div>
                </motion.div>

                <motion.div className=""
                     initial={{
                    opacity:0,
                    y:100,

                }}
                

                whileInView={{
                    opacity:1,
                    y:0,
                }}

                transition={{
                    duration:0.5,
                    duration:1

                 }}
                
                >
                    <h1>OUR SOCIAL MEDIAL HANDLES </h1>
                    <div className=" m-4 gap-6 flex  text-orange-600">
                        <WhatsAppIcon  className=' hover:text-orange-50 transition-colors'/>
                        <XIcon  className=' hover:text-orange-50 transition-colors'/>
                        <InstagramIcon  className=' hover:text-orange-50 transition-colors'/>
                        <FacebookIcon  className=' hover:text-orange-50 transition-colors'/>

                    </div>
                </motion.div>

                <motion.div className='h-12 w-12 hover:bg-amber-700 transition-colors bg-orange-600 rounded-full text-center items-center flex justify-center '

                initial={{
                    opacity:0

                }}

                whileInView={{
                    opacity:1
                }}

                transition={{
                    duration:.8,
                    delay:.5,
                }}

                onClick={handleScroll}
                
                >
                    < ArrowUpwardIcon />

                </motion.div>
            </div>
             
        </div>

       <hr className="border-t border-gray-300 opacity-50 w-full my-4" />


             <motion.p className='text-center text-sm text-gray-200'
                  initial={{
                    opacity:0,
                    y:100,

                }}
                

                whileInView={{
                    opacity:1,
                    y:0,
                }}

                transition={{
                    duration:0.5,
                    duration:.8

                 }}
             
             >&copy; 2025 ESTATEEASE. All rights reserved.</motion.p>

    </motion.div>
  )
}

export default Footer