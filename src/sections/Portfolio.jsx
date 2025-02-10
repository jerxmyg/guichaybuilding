import React from 'react'
import project26 from '../assets/2/26.png'
import project27 from '../assets/2/27.png'
import project23 from '../assets/2/23.png'
import project8 from '../assets/2/8.png'
import project18 from '../assets/2/18.png'
import project9 from '../assets/2/9.png'
import project1 from '../assets/2/1.png'
import project29 from '../assets/2/29.png'
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
          <img src={project26} alt="project image" className='h-250px w-full' />
          <img src={project23} alt="project image" className='h-250px w-full' />
          <img src={project8} alt="project image" className='h-250px w-full' />
          <img src={project18} alt="project image" className='h-250px w-full' />
          <img src={project27} alt="project image" className='h-250px w-full' />
          <img src={project9} alt="project image" className='h-250px w-full' />
          <img src={project1} alt="project image" className='h-250px w-full' />
          <img src={project29} alt="project image" className='h-250px w-full' />

        </motion.div>
    </div>
  )
}

export default Portfolio