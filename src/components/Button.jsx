import React from 'react'

const Button = ({name,href}) => {
  return (
    <div className='mt-5  mb-4'>
         <a className='border-2 p-2 rounded-lg border-primary capitalize text-secondary sm:ms-5 ms-6 button ' href={`#${href}`}>{name}</a>
    </div>
  )
}

export default Button