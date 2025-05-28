import React from 'react'
import client1 from '../assets/pngwing1.png'
import client2 from '../assets/pngwing.2.png'
import client3 from '../assets/pngwing3.png'
import client4 from '../assets/pngwing4.png'
import client5 from '../assets/pngwing5.png'
import client6 from '../assets/pngwing6.png'
import client7 from '../assets/pngwing7.png'
import client8 from '../assets/pngwing8.png'
import client9 from '../assets/pngwing9.png'
import client10 from '../assets/pngwing10.png'
import client11 from '../assets/pngwing11.png'
import client12 from '../assets/pngwing12.png'
import client13 from '../assets/pngwing13.png'


const TrustedClient = () => {
  return (
    <div className='w-full relative py-12 px-4 md:px-8 lg:px-24 flex flex-col items-center justify-center overflow-hidden'>

      {/* our trusted-clients */}
        <div className=" flex flex-col items-center">
            <h2 className='text-orange-500 font-bold text-sm items-center'>CLIENTS</h2>
             <h1 className=' text-3xl text-gray-950 font-semibold'>Trusted By Our Beloved Clients</h1>
        </div>

        <div className=" flex before_after">
       
        <div className="flex overflow-hidden gap-8 mt-12 items-center animation-scroll">
            <img src={client1} alt="" className=' h-12 object-cover'/>
            <img src={client2} alt="" className=' h-12 object-cover'/>
            <img src={client3} alt="" className=' h-12 object-cover'/>
            <img src={client4} alt="" className=' h-12 object-cover'/>
            <img src={client5} alt="" className=' h-12 object-cover'/>
            <img src={client6} alt="" className=' h-12 object-cover'/>
            <img src={client7} alt="" className=' h-12 object-cover'/>
            <img src={client8} alt="" className=' h-12 object-cover'/>
            <img src={client9} alt="" className=' h-12 object-cover'/>
            <img src={client10} alt="" className=' h-12 object-cover'/>
            <img src={client11} alt="" className=' h-12 object-cover'/>
            <img src={client12} alt="" className=' h-12 object-cover'/>
            <img src={client13} alt="" className=' h-12 object-cover'/>
        </div>
        <div className="flex overflow-hidden gap-8 mt-12 items-center animation-scroll">
            <img src={client1} alt="" className=' h-12 object-cover'/>
            <img src={client2} alt="" className=' h-12 object-cover'/>
            <img src={client3} alt="" className=' h-12 object-cover'/>
            <img src={client4} alt="" className=' h-12 object-cover'/>
            <img src={client5} alt="" className=' h-12 object-cover'/>
            <img src={client6} alt="" className=' h-12 object-cover'/>
            <img src={client7} alt="" className=' h-12 object-cover'/>
            <img src={client8} alt="" className=' h-12 object-cover'/>
            <img src={client9} alt="" className=' h-12 object-cover'/>
            <img src={client10} alt="" className=' h-12 object-cover'/>
            <img src={client11} alt="" className=' h-12 object-cover'/>
            <img src={client12} alt="" className=' h-12 object-cover'/>
            <img src={client13} alt="" className=' h-12 object-cover'/>
        </div>
        </div>







    </div>
  )
}

export default TrustedClient