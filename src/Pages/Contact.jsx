import React from 'react'
import contact from '../assets/contactimg.jpeg'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <>
<motion.div className='w-full h-[40vh] md:h-auto mt-16 py-16 px-4 md:px-8 lg:px-24 flex items-center justify-center text-center'
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${contact})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
 initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
>
  <div className="text-white w-full md:w-1/2">
    <h1 className='font-bold text-3xl mb-4'>CONTACT US</h1>
    <p className='text-base tracking-wide'>If you’re looking for a new home, an investment property or to explore the area we’ll help you find exactly what you’re looking for.</p>
  </div>
</motion.div>

<div className="py-20 flex flex-col md:flex-row px-4 md:px-8 lg:px-24 w-full bg-gray-100 gap-15 content-center justify-center">
  {/* contact */}
  <motion.div className="md:w-1/2 w-full mb-6 md:mb-0 bg-gray-200 p-6 rounded-2xl shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all"
   initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay:.5 }}

  
  >
    <h1 className='font-bold text-3xl text-blue-950 mb-2'>LET'S GET IN TOUCH</h1>
    <h2 className='text-gray-600 text-base mb-4'>We love to hear from you. Our friendly team is here to chat.</h2>

    <div className=" gap-8 flex flex-col">
    <div className="flex gap-3 items-center">
      <div className="text-white w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-sm border border-blue-900">
        <ContactMailIcon />
      </div>
      <div>
        <h1 className='font-bold'>Address</h1>
        <p className="text-gray-600">Ahyiresu Post Office 119</p>
      </div>
    </div>

    <div className="flex gap-3 items-center">
      <div className="text-white w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-sm border border-blue-900">
        <LocalPhoneIcon />
      </div>
      <div>
        <h1 className='font-bold'>phone</h1>
        <p className="text-gray-600">+233599316218</p>
      </div>
    </div>

    <div className="flex gap-3 items-center">
      <div className="text-white w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-sm border border-blue-900">
        <EmailIcon/>
      </div>
      <div>
        <h1 className='font-bold'>E-mail</h1>
        <p className="text-gray-600">bawaernest926@gmail.com</p>
      </div>
    </div>
    </div>
  </motion.div>

  {/* form section */}
  <motion.div className="md:w-1/2 w-full"

   initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay:1 }}
  
  >
    {/* Form will go here */}
    <h1 className=' text-blue-950 font-bold mb-4 text-2xl'>CONTACT BY FILLING THIS FORM</h1>

    <form action="" className=' flex flex-col gap-4'>
      <div className="">
        <label className='text-gray-600'>Name:</label>
        <input type="text" placeholder='Enter your Name...' className='w-full outline-none border-1 border-orange-500 p-2 placeholder:text-base mt-2 rounded cursor-pointer
             hover:border-blue-900 transition-colors hover:shadow
        ' />
      </div>
      <div className="">
        <label className='text-gray-600'>Contact:</label>
        <input type="phone" placeholder='Enter your phone...' className='w-full outline-none border-1 border-orange-500 p-2 placeholder:text-base mt-2 rounded cursor-pointer
             hover:border-blue-900 transition-colors hover:shadow
        ' />
      </div>
      <div className="">
        <label className='text-gray-600'>Email:</label>
        <input type="email" placeholder='Enter your email...' className='w-full outline-none border-1 border-orange-500 p-2 placeholder:text-base mt-2 rounded cursor-pointer 
        hover:border-blue-900 transition-colors hover:shadow' />
      </div>

      <button className=' text-white bg-blue-900 px-4 py-2 rounded-xl outline-none w-30 text-base hover:bg-blue-700 transition-all hover:shadow'>Submit...</button>

    
    </form>


  </motion.div>
</div>


    </> 
  )
}

export default Contact