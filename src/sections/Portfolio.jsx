import React from 'react'
import project1 from '../assets/project1.jpg'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
            <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90px] m-auto py-[60px] flex flex-col  justify-between
      items-center gap-[20px]'
      >
        <motion.h1
        variants={slideUpVariants}
        className='text-green-800 text-2xl'
        >
          Portfolio
        </motion.h1>
        <motion.h1
        variants={slideUpVariants}
        className='text-white uppercase text-[40px] font-bold text-center'
        >
          OUR BEST Projects
        </motion.h1>
        <motion.div
        variants={slideUpVariants}
        className='w-[120px] h-[6px] bg-green-800'>
          
        </motion.div>
        <motion.h1
        variants={slideUpVariants}
        className='text-white  text-[20px] font-bold text-center'
        >
          Take a look at some of the homes we’ve helped bring to life! From full builds to 
          renovations and additions, our work showcases the care and dedication we put into 
          every project. Let our portfolio inspire your next project!
        </motion.h1>

      </motion.div>


      <motion.div
        initial="hidden"
        whileinView={slideUpVariants}
        className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'>
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />

        </motion.div>
    </div>
  )
}

export default Portfolio