import React from 'react'
import Tech from './Tech'
import {Techno} from '../constant'
import {educations} from '../constant'
import Education from './Education'

const Skill = () => {
  
  return (
    <section id='Skill' className='flex flex-col sm:px-10 mt-10 '>
      <div className='w-full flex flex-col justify-between'>
        
          <h3 className=' text-center  text-[30px] sm:text-[45px] font-semibold capitalize'><span className='text-secondary'>Skill </span> & Education</h3>
          
          <div className='flex  items-start flex-wrap justify-evenly  '>
            <div className='flex  flex-wrap lg:w-[30%] md: w-[100%]'>
                {Techno.map((tech)=> <Tech key={tech} {...tech}/>)}
            </div>

            
              <div className='flex flex-col items-start  mr-5'>
                {educations.map((educ)=> <Education key={educ} {...educ}/>)}
                
              </div>
          </div>
      </div>
    </section>
  )
}

export default Skill