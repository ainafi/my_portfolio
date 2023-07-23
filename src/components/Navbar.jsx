import React, { useState } from 'react'
import { Logo, Menu,Close } from '../assets/images'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className='flex items-center justify-between '>
       <img className='w-[130px]' src={Logo} alt="logo" />
      <ul className=' items-center sm:flex hidden justify-end '>
        
          {['home','about','portfolio','skill','contact'].map((item)=>(
            <li key={`link-${item}`}>
              <a className='font-semibold uppercase mr-4 navbar' href={`#${item}`}>{item}</a>
            </li>
          ))}
      </ul>

        <div className='sm:hidden flex justify-end'>
          <button onClick={()=>settoggle(!toggle)}>
            <img className='w-[30px] mr-6 bg-primary p-1 rounded-full cursor-pointer  z-10 ' src={toggle ? Close: Menu}  alt="" />
          </button>

          <motion.div 
          whileInView={{x:[100,0],opacity:[.5,1]}}
          transition={{duration:0.5 ,ease:'easeIn'}}
          className={`${!toggle ? 'hidden' : 'flex'} bg-slate-300 shadow-md  text-balck absolute top-[84px] right-[10px] p-5 rounded-[20px] `}>

          <ul className='flex flex-col items-center  '>
        
          {['home','about','portfolio','skill','contact'].map((item)=>(
            <li className='pb-1 flex flex-col items-center justify-center ' key={`link-${item}`}>
              <a className='font-semibold uppercase mr-4 navbar pb-4' href={`#${item}`}>{item}</a>
            </li>
          ))}
          
      
       
          </ul>

          </motion.div>

        </div>
        

        
    </nav>
  )
}

export default Navbar