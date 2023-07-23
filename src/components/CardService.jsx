import React from 'react'

const CardService = ({title,description,image}) => {
  return (
    <div className='flex flex-col items-center text-center mb-5'>
        <img className='w-[150px]' src={image} alt={title} />
        <h4 className=' w-[80%] text-[20px] font-semibold pb-2'>{title}</h4>
        <p className='w-[85%]'>{description}</p>
                
    </div>
  )
}

export default CardService