import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const RequirementSection = () => {
  return (
    <div className='fle flex-col items-center content-center w-full px-8 md:px-16 lg:px-24 text-center py-24 place-content-center'>
        <h1 className='font-bold mb-8 text-2xl'>Everything You Need </h1>

        <div className=" flex w-full items-center content-center justify-center">
      
     
        <div className=" w-full md:w-full grid md:grid-cols-2 lg:grid-cols-3 items-center content-center text-center gap-4 lg:w-[80%]">
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <WifiIcon className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <LocalHotelIcon className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <AcUnitIcon className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <PoolIcon  className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <FitnessCenterIcon className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>
            <div className=" bg-gray-100 p-8 rounded-xl w-full h-60 md:w-70 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)] hover:border-2 hover:border-gray-400 transition-all">
                <DesignServicesIcon className='text-orange-500 mb-4'/>
                <h1 className='font-bold text-xl mb-4'>Free Wi-Fi</h1>
                <p className='text-gray-500'>Stay Connected Anytime, Anywhere</p>

            </div>

        </div>
        </div>

    </div>
  )
}

export default RequirementSection