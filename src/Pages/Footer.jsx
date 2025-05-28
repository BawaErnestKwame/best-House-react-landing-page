import React from 'react'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  return (
    <div className='bg-gray-950 px-8 md:px-16 lg:px-24 text-white pt-16 pb-4'>
        <div className=" flex justify-between flex-wrap gap-4">
            <div className="md:w-1/3 lg:w-1/3 w-full">
                 <h1 className=' font-bold text-xl cursor-pointer text-white'>ESTATE<span className=' text-orange-500'>EASE</span></h1>
                 <p className='text-white text-sm mt-3'> Discover your dream property with our easy-to-use real estate Platform. Browse Listings, Compare Price and connect with trusted agents in one place </p>
            </div>

            <div className=" flex gap-16 flex-wrap">
                <div className=" flex flex-col">
                    <h1>PAGES</h1>

                    <div className=" flex flex-col text-sm mt-2">

                <Link className='hover:text-orange-600 transition-colors'> Header</Link>
                <Link className='hover:text-orange-600 transition-colors'> Accordion</Link>
                <Link className='hover:text-orange-600 transition-colors'>Comfort</Link>
                <Link className='hover:text-orange-600 transition-colors'>Expected Guide</Link>
                <Link className='hover:text-orange-600 transition-colors'> Insight</Link>
                <Link className='hover:text-orange-600 transition-colors'> Requirement</Link>
                </div>
                </div>

                <div className=" flex flex-col">
                <h1>Components</h1>

                <div className=" flex flex-col text-sm mt-1">
                <Link className='hover:text-orange-600 transition-colors'> Home</Link>
                <Link className='hover:text-orange-600 transition-colors'> About</Link>
                <Link className='hover:text-orange-600 transition-colors'>Service</Link>
                <Link className='hover:text-orange-600 transition-colors'> Product</Link>
                <Link className='hover:text-orange-600 transition-colors'> Contact</Link>
                </div>
                </div>

                <div className="">
                    <h1>OUR SOCIAL MEDIAL HANDLES </h1>
                    <div className=" m-4 gap-6 flex  text-orange-600">
                        <WhatsAppIcon  className=' hover:text-orange-50 transition-colors'/>
                        <XIcon  className=' hover:text-orange-50 transition-colors'/>
                        <InstagramIcon  className=' hover:text-orange-50 transition-colors'/>
                        <FacebookIcon  className=' hover:text-orange-50 transition-colors'/>

                    </div>
                </div>

                <div className=" h-12 w-12 hover:bg-amber-700 transition-colors bg-orange-600 rounded-full text-center items-center flex justify-center">
                    < ArrowUpwardIcon />

                </div>
            </div>
             
        </div>

       <hr className="border-t border-gray-300 opacity-50 w-full my-4" />


             <p className='text-center text-sm text-gray-200'>&copy; 2025 ESTATEEASE. All rights reserved.</p>

    </div>
  )
}

export default Footer