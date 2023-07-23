import React from 'react'
import {motion} from 'framer-motion'
import Tech from './Tech'
import {Techno} from '../constant'
import {educations} from '../constant'
import Education from './Education'

const Skill = () => {
  
  return (
    <section id='Skill' className='flex flex-col sm:px-10 mt-10 '>
      <div className='w-full flex flex-col justify-between'>
        
          <motion.h3 
          whileInView={{x:[-100,0],opacity:[.5,1]}}
          transition={{duration:.8,ease:'easeInOut'}}
          className=' text-center  text-[30px] sm:text-[45px] font-semibold capitalize'><span className='text-secondary'>Skill </span> & Education</motion.h3>
          
          <div className='flex  items-start flex-wrap justify-evenly  '>
            <motion.div
            whileInView={{y:[0,80],opacity:[.4,1]}}
            transition={{duration:.6,ease:'easeIn'}}  className='flex  flex-wrap lg:w-[30%] md: w-[100%]'>
                {Techno.map((tech)=> <Tech key={tech} {...tech}/>)}
            </motion.div>

            
              <motion.div
              whileInView={{y:[0,80],opacity:[.4,1]}}
              transition={{duration:.6,ease:'easeIn'}} 
               className='flex flex-col items-start  mr-5'>
                {educations.map((educ)=> <Education key={educ} {...educ}/>)}
                
              </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Skill