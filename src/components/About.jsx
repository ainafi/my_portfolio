import React from 'react'
import {Heros} from '../assets/images'
import Button from './Button'
const About = () => {
  return (
    <section id='about' className='flex flex-col  pb-10 sm:px-10 mt-4 sm:mt-20'>
      <div className=''>
        <div className='flex items-center justify-center'>
            <h3 className='text-secondary text-[30px] sm:text-[45px] font-semibold capitalize'> About me</h3>
        </div>

        <div className='flex flex-wrap sm:items-start justify-center '>
            <div className=''>
                <img className='w-[440px] h-[743px] object-fill' src={Heros} alt="heros" />
            </div>
            <div className='w-[90%] sm:w-[80%] md:w-[50%] mt-6 pt-4 text-[19px] sm:text-[20px]  '>
              <p>Welcome to my portfolio! I am a self-taught front-end developer with a passion for creating visually stunning and user-friendly websites. In addition to my programming skills, I am also a dedicated chemical student, constantly seeking knowledge and challenges in the world of science.
              From an early age, I have been fascinated by the potential of technology and its ability to shape our lives. This curiosity led me to embark on a journey of self-learning, where I honed my skills in front-end development through countless hours of experimentation, online tutorials, and personal projects.In parallel to my passion for web development, I am pursuing my studies in chemistry,Throughout my portfolio, you will find a collection of projects that showcase my proficiency in front-end development. Whether it's crafting responsive layouts, optimizing website performance, or implementing interactive features, I am committed to delivering high-quality solutions that meet the needs of clients and users alike.
              I am constantly seeking new opportunities to expand my knowledge and collaborate with like-minded individuals who share my enthusiasm for technology and science. If you're interested in working together or have any questions, please feel free to reach out. Let's embark on a journey of innovation and creativity together!</p>
              <div className='flex flex-col items-center justify-center mt-5'>
                <Button href='contact'  name='hire me'/>
              </div>
            </div>

        </div>
        
      </div>
      
    </section>
  )

}

export default About