import React from 'react'
import { Services } from '../constant'
import CardService from './CardService'

const Service = () => {
  return (
    <section id='servive' className='flex flex-col  pb-10 sm:px-10 mt-4 sm:mt-20  '>
      <div className=' w-full flex flex-col items-center '>
        <div className='flex flex-col items-center text-center pb-10'>
          <h3 className='text-[25px] sm:text-[45px] font-semibold'>Empowering your <span className='text-secondary'>web identity</span><br />i know <span className='text-secondary'>good design </span>means <span className='text-secondary'>good business</span> </h3>
        </div>

        <div className='grid xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4'>
           {Services.map((card)=><CardService key={card.id} {...card}/>)}
            
        </div>
      </div>
    </section>
  )
}

export default Service