import React from 'react'
import {motion} from 'framer-motion'
const CardService = ({title,description,image}) => {
  return (
    <motion.div
    
    whileHover={{scale:1.1}}
    whileInView={{opacity:1}}
    transition={{duration:.8, type:'spring'}}
     className='flex flex-col items-center text-center mb-5'>
        <img className='w-[150px]' src={image} alt={title} />
        <h4 className=' w-[80%] text-[20px] font-semibold pb-2'>{title}</h4>
        <p className='w-[85%]'>{description}</p>
                
    </motion.div>
  )
}

export default CardService