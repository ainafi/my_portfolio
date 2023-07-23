import React from 'react'

const Education = ({year,name,description}) => {
  return (
    <div className='flex mb-4 pt-4'>
        <h4 className='mr-8 font-medium'>{year}</h4> 
                    
          <div className='flex flex-col '>
              <h5 className='text-secondary capitalize text-[20px] font-medium'>{name}</h5>
              <p className='capitalize ml-7 font-normal mt-2'>{description}</p>
          </div>
    </div>
  )
}

export default Education