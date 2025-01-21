import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-start gap-[50px]' id='about'>
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
        variants={slideUpVariants} className='text-green-800 text-2xl'>
          CONTACT US

        </motion.h1>
        <motion.h1
        variants={slideUpVariants}
        className='text-white uppercase text-[40px] font-bold'
        >
          ANY QUESTIONS? REACH OUT!
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-green-800'></div>
        <p className='text-3xl text-gray-50 mt-[60px]'>
          Email: guichaybuilding@gmail.com 
        </p>
        <p className='text-3xl text-gray-50 mt-[60px]'>
        Phone Number: 6319070174
        </p>
      </motion.div>


    </div>

    </div>

  )
}

export default Contact