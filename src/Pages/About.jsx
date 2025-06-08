import React from 'react'
import aboutimg from '../assets/aboutimg6.jpeg'
import team1 from '../assets/team1.jpeg'
import team2 from '../assets/team2.jpeg'
import team3 from '../assets/team3.jpeg'
import team4 from '../assets/team4.jpeg'
import team5 from '../assets/contactimg.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';



const About = () => {
  return (
    <>
      <motion.div
        className="w-full mt-16 py-12 px-4 md:px-8 lg:px-24 h-[40vh]  flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${aboutimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}

        initial={{opacity:0, y:-50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1 }}
      >
        <div className="text-white max-w-2xl mx-auto"
  
        >
          <h1 className="font-bold text-3xl mb-4">ABOUT US</h1>
          <p className="text-base leading-relaxed">
            EstateHouse is a real estate platform that helps you find your dream home with ease.
            We connect you with trusted agents, verified listings, and helpful tools to make buying,
            selling, or renting simple and stress-free.
          </p>
        </div>
      </motion.div>

      <motion.div className=" flex gap-14 flex-col md:flex-row py-12 w-full px-4 md:px-8 lg:px-24 justify-between"

      
      >
        <motion.h1 className='text-3xl  text-gray-900 font-bold'
              initial={{
              opacity:0, x:-400,
               }}

              animate={{
                opacity:1,
                x:0,
              }}

              transition={{
                type:"spring",
                stiffness:50,
                damping:10,

              }}
        
        >Our Legacy Of Building Dream</motion.h1>


        <motion.p className='text-gray-700 w-full md:w-2/3'
           initial={{
              opacity:0, x:400,
               }}

              animate={{
                opacity:1,
                x:0,
              }}

              transition={{
                type:"spring",
                stiffness:50,
                damping:10,

              }}
        
        >For over a decade, <b>EstateHouse</b> has stood as a pillar of trust and excellence in the real estate industry. Founded on the belief that finding a home should be personal, simple, and stress-free, we’ve helped countless families, investors, and individuals discover places they can truly call home.

        Our journey began with a single mission: to bridge the gap between people and properties through transparency, dedication, and innovation. Over the years, we've grown into a reliable platform connecting clients with verified listings and experienced agents they can count on.</motion.p>
      </motion.div>

  

          <motion.div className=" flex flex-col w-full  px-4 md:px-8 lg:px-24 pb-12 pt-12 mt-20 items-center content-center bg-gray-100"
             initial={{
              opacity:0, y:400,
               }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:.8

              }}
          
          >
            {/* works percentage and others  */}
            <motion.div className=" flex justify-between flex-wrap gap-4 md:flex-row w-[80%] mb-12"
            >
              <motion.div className=""
                  initial={{
                    opacity:0,
                    y:200
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    duration:2,
                    delay:.5,
                  }}
              
              >
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </motion.div>
              <motion.div className=""
                  initial={{
                    opacity:0,

                  }}

                  animate={{
                    opacity:1,
                  }}

                  transition={{
                    duration:2,
                    delay:1,
                  }}
              
              >
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </motion.div>
              <motion.div className=""
                            
                                initial={{
                        opacity:0,
                    
                      }}

                      animate={{
                        opacity:1,
                    
                      }}

                      transition={{
                        duration:2,
                        delay:1.5,
                      }}
        >
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </motion.div>
              <motion.div className=""
                            initial={{
                    opacity:0,
                
                  }}

                  animate={{
                    opacity:1,
               
                  }}

                  transition={{
                    duration:2,
                    delay:2,
                  }}
              
              >
            <h1 className='font-bold text-4xl text-gray-900 border-b-3 border-orange-600 p-1 mb-3'>    8.9%</h1>
            <p className='text-gray-600 text-base'>Profit Return</p>

              </motion.div>

            </motion.div>

            {/* images  */}
            <motion.div className=" "
                initial={{
              opacity:0, y:200,
               }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:.8

              }}
            
            >
              <img src={aboutimg} alt="" className=' h-[50vh] w-250 object-cover rounded-3xl' />

            </motion.div>
          </motion.div>


          {/* our story page */}

          

          <div className="flex flex-col px-4 md:px-8 lg:px-24 pb-12 pt-12 mt-20 items-center align-middle bg-gray-100 ">

            <motion.h1 className='mb-3 text-3xl text-gray-900 font-bold'
            
                initial={{
          opacity:0,
          y:100
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
         type:"spring",
         stiffness:60,
         damping:8,
        }}>OUR STORY</motion.h1>
              <motion.p className='text-center md:w-[70%] text-base text-gray-700'
                     initial={{
          opacity:0,
          y:200
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
         type:"spring",
         stiffness:50,
         damping:5,
        }}
              
              >At EstateHouse, our story began with a simple idea to make real estate easier, more transparent, and accessible for everyone.

              What started as a small vision quickly grew into a trusted platform helping individuals and families find their dream homes. Driven by a passion for people and property, we set out to connect buyers, sellers, and agents in a way that feels seamless and secure.

              Over the years, we’ve built strong relationships with our clients by staying true to our values: integrity, trust, and excellence. We've grown with the communities we serve, adapting to change and embracing innovation all while keeping people at the heart of what we do.</motion.p>

          </div>

          {/* our expects */}

          <motion.div className=" flex flex-col px-4 md:px-8 lg:px-24 pb-12 pt-12 mt-15 items-center"
           initial={{ opacity: 0, x: -300 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 10 }}
  viewport={{ once: true, amount: 0.5 }}
  whileHover={{ scale: 1.05 }}
          
          >
            <h1 className=' font-bold text-gray-900 mb-6 text-2xl'>OUR AGENTS</h1>
            <div className=" bg-gray-50 p-8  flex flex-wrap justify-center gap-8 rounded-2xl border-t-4 border-orange-600 shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)]">

           <motion.div
  className="flex flex-col items-center text-center space-y-2"
  initial={{ opacity: 0, x: -300 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 10 }}
  viewport={{ once: true, amount: 0.5 }}
  whileHover={{ scale: 1.05 }}
>
  <img src={team1} alt="" className="w-16 h-16 rounded-full" />
  <div>
    <h2 className="font-bold">Danial Redcliff</h2>
    <p>Founder & CEO of Estate</p>
  </div>
</motion.div>


              <div className="flex flex-col items-center text-center">
                <img src={team2} alt="" className=' w-15 h-15 rounded-full align-middle '/>
                <div className="">
                  <h2 className=' font-bold'>Danial Redcliff</h2>
                  <p>Founder & CEO of Estate</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <img src={team4} alt="" className=' w-15 h-15 rounded-full align-middle '/>
                <div className="">
                  <h2 className=' font-bold'>Danial Redcliff</h2>
                  <p>Founder & CEO of Estate</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <img src={team3} alt="" className=' w-15 h-15 rounded-full align-middle '/>
                <div className="">
                  <h2 className=' font-bold'>Danial Redcliff</h2>
                  <p>Founder & CEO of Estate</p>
                </div>
              </div>


            </div>

            <motion.button className='bg-orange-500 text-white py-2 px-4 cursor-pointer rounded mt-4 flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)]'
                         initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
         type:"spring",
         stiffness:60,
         damping:15,
        }}

        whileHover={{ scale: 1.05 }}
            >Find More Agents <ArrowForwardIcon/></motion.button>
          </motion.div>

          {/* find your dream home faster */}
<div className="w-full mt-16 py-12 px-4 md:px-8 lg:px-24 h-screen mb-12 flex items-center justify-center text-center">
  <div
    className="w-full h-full flex items-center justify-center text-white rounded-lg p-8"
    style={{
      backgroundImage: `linear-gradient(to top, rgba(23, 37, 84, 0.9), transparent), url(${team5})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <motion.div className="max-w-2xl flex flex-col  justify-center items-center"
                     initial={{
          opacity:0,
          y:100
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
         type:"spring",
         stiffness:60,
         damping:10,
        }}
    
    >
      <h1 className="text-4xl font-bold mb-4 ">Find Your Your Dream Home Faster</h1>
      <p className="text-lg leading-relaxed">
        EstateHouse was founded with a vision to make real estate simple, trusted, and accessible. From connecting buyers to trusted agents to showcasing verified properties, we aim to make every housing journey smooth and meaningful.
      </p>

          <motion.button className='bg-orange-500  text-white py-2 px-4 cursor-pointer rounded mt-8 flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)]'
                       initial={{
          opacity:0,
          y:100
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
         type:"spring",
         stiffness:60,
         damping:10,
        }}

        whileHover={{ scale: 1.05 }}
          >Search Now<ArrowForwardIcon/></motion.button>
      

     
    </motion.div>
  </div>
</div>



    </>
  )
}

export default About
