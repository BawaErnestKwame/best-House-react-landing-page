import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
      </motion.div>

      <div className="px-4 md:px-16 lg:px-24 py-12 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-blue-950 mb-8">OUR CORE SERVICE</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[{
            icon: <InventoryIcon />,
            title: 'Property Buying',
            desc: 'We help you find your ideal home quickly and with expert guidance.'
          }, {
            icon: <CurrencyExchangeIcon />,
            title: 'Property Selling',
            desc: 'Sell your property at the right price with trusted agents by your side.'
          }, {
            icon: <ManageSearchIcon />,
            title: 'Property Search & Listings',
            desc: 'Browse a wide range of verified listings tailored to your needs.'
          }, {
            icon: <SensorOccupiedIcon />,
            title: 'Agent Connection Services',
            desc: 'Connect with experienced agents ready to assist you every step of the way.'
          }, {
            icon: <EditDocumentIcon />,
            title: 'Legal & Documentation Help',
            desc: 'We assist with contracts and paperwork to ensure a smooth transaction.'
          }, {
            icon: <SimCardDownloadIcon />,
            title: ' Mortgage & Financing Advice',
            desc: 'Get expert advice on home loans, financing, and mortgage options.'
          }].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center mb-2">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="px-4 md:px-16 lg:px-24 py-12 mt-18 flex flex-col md:flex-row gap-12 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Why Choose EstateHouse?</h1>
          <div className="space-y-6">
            {[{
              icon: <LowPriorityIcon />,
              title: 'Verified Listings',
              desc: 'We ensure all property listings are authentic, regularly updated, and thoroughly checked to save you time and avoid scams.'
            }, {
              icon: <HailIcon />,
              title: 'Trusted Agents',
              desc: 'Work with vetted professionals who guide you every step of the way with honesty and care.'
            }, {
              icon: <MoveUpIcon />,
              title: 'Transparent Pricing',
              desc: 'No hidden fees or surprises — just clear, fair pricing for every property and service.'
            }, {
              icon: <CalendarViewWeekIcon />,
              title: 'Fast Responses',
              desc: 'Our team responds promptly to your inquiries to keep your property journey moving forward.'
            }].map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 text-white bg-orange-500 rounded-full flex items-center justify-center">
                  {reason.icon}
                </div>
                <div>
                  <h2 className="font-bold text-lg">{reason.title}</h2>
                  <p className="text-gray-600 text-base">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="w-full md:w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={house} alt="EstateHouse" className="w-full rounded-lg shadow-md hover:shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] transition-all" />
        </motion.div>
      </motion.div>

      <motion.div
        className="px-4 md:px-16 lg:px-24 py-12 mt-18 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='font-bold text-3xl text-center mb-10'>MEET OUR AGENTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[name1, name2, name5, name6, name7, name4].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={img} alt="" className='w-full h-64 object-cover rounded-md' />
              <h1 className='font-bold mt-2'>Bawa Ernest Kwame</h1>
              <p className='text-gray-600'>Assistant CEO Manager</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Service;
