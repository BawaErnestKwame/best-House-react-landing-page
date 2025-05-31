import React from 'react';
import aboutimg from '../assets/aboutimg2.jpeg';
import name1 from '../assets/team1.jpeg';
import name2 from '../assets/team2.jpeg';
import name3 from '../assets/team3.jpeg';
import name4 from '../assets/team4.jpeg';
import name5 from '../assets/name5.jpeg';
import name6 from '../assets/name6.jpeg';
import name7 from '../assets/name7.jpeg';
import name8 from '../assets/name8.jpeg';
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import house from '../assets/house4.jpeg'
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import HailIcon from '@mui/icons-material/Hail';
import MoveUpIcon from '@mui/icons-material/MoveUp';

import house1 from '../assets/house9.jpeg';
import house2 from '../assets/house10.jpeg';
import house3 from '../assets/house11.jpeg';
import house4 from '../assets/house12.jpeg';
import room1 from '../assets/room9.jpeg';
import room2 from '../assets/room10.jpeg';
import room3 from '../assets/roo11.jpeg';
import room4 from '../assets/room12.jpeg';
import board from '../assets/board1.jpeg';





const Service = () => {
  return (
    <>
      <div
        className="w-full mt-16 py-12 px-4 md:px-8 lg:px-24 h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${aboutimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl mb-4">OUR SERVICE</h1>
          <p className="text-base leading-relaxed">
            Find verified and up-to-date listings of homes, apartments, and commercial properties. We guide you through every step of buying a home—safely, quickly, and with confidence.
          </p>
        </div>
      </div>



      <div className="px-4 md:px-16 lg:px-24 py-12 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-blue-950 mb-8">OUR CORE SERVICE</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">

          <div className="bg-white p-6 rounded-lg shadow-md">
               <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
               <InventoryIcon/>
            </div>
           
            <h2 className="text-xl font-semibold mb-2">Property Buying</h2>
            <p className='text-gray-700 text-base'>We help you find your ideal home quickly and with expert guidance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
               <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
               <CurrencyExchangeIcon/>
            </div>
           
            <h2 className="text-xl font-semibold mb-2">Property Selling</h2>
            <p className='text-gray-700 text-base'>Sell your property at the right price with trusted agents by your side.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
               <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
                  <ManageSearchIcon/>
            </div>
         
            <h2 className="text-xl font-semibold mb-2">Property Search & Listings</h2>
            <p className='text-gray-700 text-base'>Browse a wide range of verified listings tailored to your needs.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
               <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
               <SensorOccupiedIcon/>
            </div>
            
           
            <h2 className="text-xl font-semibold mb-2">Agent Connection Services</h2>
            <p className='text-gray-700 text-base'>Connect with experienced agents ready to assist you every step of the way.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
               <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
               <EditDocumentIcon/>
            </div>
            
            <h2 className="text-xl font-semibold mb-2">Legal & Documentation Help</h2>
            <p className='text-gray-700 text-base'>We assist with contracts and paperwork to ensure a smooth transaction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className=" w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
               <SimCardDownloadIcon/>
            </div>
            <h2 className="text-xl font-semibold mb-2"> Mortgage & Financing Advice</h2>
            <p className='text-gray-700 text-base'>Get expert advice on home loans, financing, and mortgage options.</p>
          </div>
        </div>
      </div>

  <div className="px-4 md:px-16 lg:px-24 py-12 mt-18 flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Why Choose EstateHouse?</h1>
        <div className="space-y-6">

          <div className="flex items-start gap-4">
            <div className="w-15 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center">
              <LowPriorityIcon />
            </div>
            <div>
              <h2 className="font-bold text-lg">Verified Listings</h2>
              <p className="text-gray-600 text-base">We ensure all property listings are authentic, regularly updated, and thoroughly checked to save you time and avoid scams.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center">
             <HailIcon/>
            </div>
            <div>
              <h2 className="font-bold text-lg">Trusted Agents</h2>
              <p className="text-gray-600 text-base">Work with vetted professionals who guide you every step of the way with honesty and care.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center">
             <MoveUpIcon/>
            </div>
            <div>
              <h2 className="font-bold text-lg">Transparent Pricing</h2>
              <p className="text-gray-600 text-base">No hidden fees or surprises — just clear, fair pricing for every property and service.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center">
            <CalendarViewWeekIcon/>
            </div>
            <div>
              <h2 className="font-bold text-lg">Fast Responses</h2>
              <p className="text-gray-600 text-base">Our team responds promptly to your inquiries to keep your property journey moving forward.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img src={house} alt="EstateHouse" className="w-full rounded-lg shadow-md hover:shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:scale-105 transition-all" />
      </div>
    </div>

   <div className="px-4 md:px-16 lg:px-24 py-12 mt-18 mx-auto">
  <h1 className='font-bold text-3xl text-center mb-10'>MEET OUR AGENTS</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="">
      <img src={name1} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Sales Manager</p>
    </div>

    <div className="">
      <img src={name2} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Francene Vandyne</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>

    <div className="">
      <img src={name5} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>

    <div className="">
      <img src={name6} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>
    <div className="">
      <img src={name7} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>
      <div className="">
      <img src={name4} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>
    <div className="">
      <img src={name8} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>
     <div className="">
      <img src={name3} alt="" className='w-full h-64 object-cover rounded-md' />
      <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
      <p className='text-gray-600'>Assistant CEO Manager</p>
    </div>
  </div>

 <hr className="border-t border-gray-400 mt-10 mb-6" />


 <div className="px-4 md:px-16 lg:px-24 py-12 text-center bg-white mt-12">
  <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Team</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Are you passionate about real estate and helping people find their dream homes? Become a part of EstateHouse and work with a team of professionals committed to excellence, integrity, and innovation.
  </p>
  <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
    Apply Now
  </button>
</div>
</div>

 <div className="px-4 md:px-16 lg:px-24 py-12 text-center bg-white mt-12">
  <h1 className="text-3xl font-bold text-blue-900 mb-6">
    Explore Your Options <br /> Find Your Perfect Match
  </h1>

  <div className="flex overflow-x-scroll gap-6">
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={house1} alt="Modern Apartment" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Modern Apartment</h2>
        <p className="text-gray-600 text-sm">Perfect for city lovers—this sleek, centrally located apartment is great for professionals and couples.</p>
      </div>
    </div>

    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={house2} alt="Family Home" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Spacious Family Home</h2>
        <p className="text-gray-600 text-sm">A peaceful neighborhood, a big backyard, and room for everyone—ideal for growing families.</p>
      </div>
    </div>

    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={house3} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={house4} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={room1} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={room2} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={room3} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
    <div className="min-w-[280px] shadow-lg rounded-lg overflow-hidden">
      <img src={room4} alt="Commercial Space" className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Commercial Space</h2>
        <p className="text-gray-600 text-sm">Boost your business with this strategically located commercial space equipped with modern facilities.</p>
      </div>
    </div>
  </div>
</div>

<div className="w-full bg-blue-950 text-white px-4 md:px-8 lg:px-24 py-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 mt-14">
  {/* Left Content */}
  <div className="md:w-1/2">
    <h1 className="text-3xl md:text-4xl font-bold mb-5">Have A Question?</h1>
    <h2 className="text-xl font-semibold mb-4">Our Team Is Here To Assist You</h2>
    <p className="text-base text-gray-200">
      Ask about our estate products, processes, or anything else. Our highly trained reps are standing by to help you out, so feel free to reach out anytime.
    </p>

     <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 m-6">
    Contact
  </button>
 <button> <p>Or Call +233599316218</p></button>


  </div>

  {/* Right Image */}
  <div className="md:w-1/3">
    <img src={board} alt="Support Team" className="w-full h-auto object-contain rounded-lg shadow-lg" />
  </div>
</div>



    </>
  );
};

export default Service;
