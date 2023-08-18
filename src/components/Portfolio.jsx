import React from 'react'
import { motion } from 'framer-motion'
import Work from '../components/Work'
import {Job} from '../constant/index'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='w-full mt-8 pt-10 sm:pt-12 sm:mt-10'>
        <div className='flex flex-col items-center'>
          <motion.div
           whileInView={{x:[-100,0],opacity:[0.5,1]}} 
           transition={{duration:1 , ease:'easeIn'}}>
            <h3 className='text-[30px] sm:text-[45px] capitalize font-semibold '>my creative <span className='text-secondary'>portfolio</span></h3>

          </motion.div>
          <div>

            <motion.div
             whileInView={{y:[100,0],opacity:[0,1]}} 
             transition={{duration:1.5 , ease:'easeIn'}} 
             className='flex items-center justify-center flex-wrap sm:flex-row '>
            
                {Job.map((works)=>(
                  <Work key={works} {...works}/>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio