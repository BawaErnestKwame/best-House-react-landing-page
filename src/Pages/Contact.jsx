import React from 'react'
import contact from '../assets/contactimg.jpeg'
import ContactMailIcon from '@mui/icons-material/ContactMail';


const Contact = () => {
  return (
    <>
<div className='w-full h-[40vh] mt-10 px-8 md:px-16 lg:px-24 flex items-center justify-center text-center'
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${contact})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="text-white w-full md:w-1/2">
    <h1 className='font-bold text-3xl mb-4'>CONTACT US</h1>
    <p className='text-base tracking-wide'>If you’re looking for a new home, an investment property or to explore the area we’ll help you find exactly what you’re looking for.</p>
  </div>
</div>

<div className="py-12 flex flex-col md:flex-row flex-wrap px-8 md:px-16 lg:px-24 w-full bg-gray-200 ">
  {/* contact */}
  <div className="md:w-1/3 w-full mb-6 md:mb-0">
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
        <ContactMailIcon />
      </div>
      <div>
        <h1 className='font-bold'>Address</h1>
        <p className="text-gray-600">Ahyiresu Post Office 119</p>
      </div>
    </div>

    <div className="flex gap-3 items-center">
      <div className="text-white w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-sm border border-blue-900">
        <ContactMailIcon />
      </div>
      <div>
        <h1 className='font-bold'>Address</h1>
        <p className="text-gray-600">Ahyiresu Post Office 119</p>
      </div>
    </div>
    </div>
  </div>

  {/* form section */}
  <div className="md:w-2/3 w-full">
    {/* Form will go here */}
  </div>
</div>


    </> 
  )
}

export default Contact