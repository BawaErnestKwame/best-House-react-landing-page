import React from 'react'
import name1 from '../assets/name1.jpeg'
import name2 from '../assets/name2.jpeg'
import name3 from '../assets/name3.jpeg'
import name4 from '../assets/name4.jpeg'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const TestimonialsSection = () => {
  return (
    <div className='flex flex-col items-center px-8 md:px-16 lg:px-24 mt-12 mb-12'>
      <h2 className='text-orange-400 font-bold underline'>TESTIMONIAL</h2>
      <h1 className="font-bold text-2xl text-center mb-8 mt-4">
        Here From Your Neighbors, <br />Why They Chose Us!
      </h1>

      {/* Fixed overflow-hidden wrapper */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 w-max">
          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name1} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>

          {/* Repeat block starts */}
          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name2} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name3} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name4} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name1} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-gray-200 p-4 rounded-2xl w-80">
            <img src={name3} alt="" className='w-20 h-32 object-cover mt-3' />
            <div className="flex flex-col">
              <DoneOutlineIcon />
              <p className='text-gray-600 mt-1'>
                Needed a quick sale. Dream House delivered an amazing offer, exceeding expectations! So grateful for their expertise.
              </p>
              <div className="border-t border-t-gray-900 mt-2">
                <h3 className='text-blue-900'>Bawa Ernest</h3>
              </div>
            </div>
          </div>
          {/* Repeat block ends */}

        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
