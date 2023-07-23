import React,{useRef} from 'react'
import Button from './Button'

import Lottie,{LottieRefCurrentProps} from 'lottie-react'
import Typewriter from 'typewriter-effect'
// import animation image
import Front from '../assets/images/front.json'

const Hero = () => {
  const frontRef=useRef(null)
  return (
    <section id='home' className='flex flex-col  sm:px-10 pt-1  '>
     <div className='w-full   flex flex-col justify-between '>
      <div className='grid sm:grid-cols-2 max-w-[1280px] '>
        <div className='flex flex-col sm:items-start items-center justify-center  w-full px-2 font-semibold'>
          <h1 className='capitalize text-[48px] sm:text-[62px] sm:mb-8 ' >hi there
             
           </h1>
           <h2 className='capitalize text-[52px] sm:text-[62px] '>
            I am Aina 
           
           </h2>
           <span className=' text-[45px] capitalize text-secondary'>
            <Typewriter options={{
              strings:['front end dev','ui designer',' chemist'],
              loop:true,
              autoStart:true
            }} />
            </span>

            <div className='flex justify-start btn__section '>
              <Button name='resume'/>
              <Button href='contact' name='hire me'/>
            </div>    
        </div>

        <div className='w-full '>
          <Lottie
           onComplete={()=>{ frontRef.current?.   goToAndPlay(45,true) }}
            lottieRef={frontRef}
            animationData={Front}
            loop={true} />
        </div>
      </div>

     </div>
    </section>
  )
}

export default Hero