import React, { useState } from 'react'

const Tech = ({image,name}) => {
  const [showName,setShowName]=useState(false)
    const handleMouse=()=>{
      setShowName(true)
    }
    const leave=()=>{
      setShowName(false)
    }
    const getColors=()=>{
      const colors=['#ffdd00','#ff9eb3','#ffcd94','#d15400','#f0a5c0','#c0fa5','#eee2de','#f0c0a5',]
      
      return colors[Math.floor(Math.random()* colors.length)]
      
    }
    const imageStyle={
      backgroundColor:showName? getColors() :"transparent",
      borderRadius: showName ? '100%' : "0px",
      padding: showName ? '15px' : "0px",
      
      Transition: showName? "background-color .4s ease" :''
    }
  return (
    <div>
        <div className='flex flex-1 flex-wrap items-center'>
                <li className='flex flex-1 flex-col items-center ms-4   '>
                    <img
                    onMouseEnter={handleMouse}
                    onMouseLeave={leave}
                    style={imageStyle}
                    className='w-[69px] object-cover  cursor-pointer hover:scale-125  transition-all delay-150 m-4 ' src={image} alt={name} />
                    {showName && <h5  className='font-semibold transition ease-in  delay-150 mt-2'>{name}</h5>}
                </li>
                    
        </div>
    </div>
  )
}

export default Tech