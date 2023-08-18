import {useRef} from 'react'
import contacts from '../assets/images/contact.json'
import Lottie from 'lottie-react'
import Button from './Button'
const Contact = () => {
  const contactsRef=useRef()
  return (
    <section id='contact'>
      <div className='flex flex-col items-center mt-5 pt-8 sm:mt-8 sm:pt-10'>
        <h3 className='text-[30px] sm:text-[45px] capitalize font-semibold'><span className='text-secondary '>contact</span> me</h3>

        <div className='flex flex-wrap md:flex-row items-center justify-center '>
          <div className='sm:w-[500px] xs:w-[350px]'>
            <Lottie onComplete={()=>{
              contactsRef.current?.
              goToAndPlay(35,true) }}
              lottieRef={contactsRef}
              animationData={contacts}
              />
          </div>

          <div className='border-[1px] p-5 rounded-xl shadow-lg   '>
            <div className='flex items-center flex-col'>
              <input className='w-[100%] p-2 border-[1px] outline-none shadow-sm' type="text" placeholder='Your name' /> <br />
              <input className='w-[100%] p-2 border-[1px] outline-none shadow-sm' type="text" placeholder='Your mail' /> <br />
              <input className='w-[100%] h-[84px] p-2 border-[1px] outline-none shadow-sm' type="text" placeholder='Your message' /> <br />
            </div>
              <div className='ms-10'>
                <Button name='send' />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact