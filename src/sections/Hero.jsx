import React from 'react'
import heroimg from '../assets/heroimg.png'
import backgroundImage from '../assets/2/bgimg.png'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px]
    lg:px-[150px] px-[20px] flex justify-between items-center lg:flew-row flex-col
    lg:gap-5 gap-[50px] bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideUpVariants}
    className='lg:w-[60%] w-full flex flex-col justify-center items-start
    lg:gap-8 gap-4'
    >

     {/*  <motion.h1
      variants={slideUpVariants}
      className="text-green-800 text-2xl"
      >
        Guichay Building
      </motion.h1> */}

      <motion.h1
      variants={slideUpVariants}
      className='text-white uppercase text-[50px] mt-[60px] font-bold'
      >
        We will build your dream property!
      </motion.h1>

      <div className='w-[120px] h-[6px] bg-green-800'></div>
      <p className='text-white text-[20px]'>Welcome to Guichay Building! Since 2002, we’ve been helping families create beautiful and functional homes. Whether you’re planning a new build or updating your current space, we’re here to deliver quality results and bring your vision to life.

      </p>
     {/* <motion.div
      intial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className='flex justify-center items-center gap-5'
      >
        <motion.button
        variants={zoomInVariants}
        className='bg-green-800 hover:bg-white hover:text-black px-10 py-3 rounded-lg
        text-black font-bold'>
          READ MORE
        </motion.button>
        <motion.button
        variants={zoomInVariants}
        className='border-white hover:border-green-800 hover:text-green-800
        border-2 px-10 py-3 rounded-lg text-white font-bold'
        >
          REACH US
        </motion.button>
  </motion.div> */}
  </motion.div>
  <div className='w-[40%] flex flex-col justify-end items-end'>

      
    
  </div>
    </div>
  )
}

export default Hero