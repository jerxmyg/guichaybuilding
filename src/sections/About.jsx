import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const About = () => {
  return (
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
          WELCOME TO

        </motion.h1>
        <motion.h1
        variants={slideUpVariants}
        className='text-white uppercase text-[40px] font-bold'
        >
          Your vision, our expertise
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-green-800'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>About Us!</p>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <p className='text-white text-lg text-justify'>Guichay Building was founded in 2002 with one simple goal: to provide reliable and high-quality construction services for families in our community. With over two decades of experience, we’ve built a reputation for craftsmanship, attention to detail, and treating every project like it’s our own home.
</p>

      </motion.div>

    </div>
  )
}

export default About