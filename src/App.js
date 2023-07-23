import React from 'react'
import styles from './style'
import { Navbar,Hero,Service,About,Portfolio,Skill,Contact } from './components'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.boxWidth} mx-auto ` }>
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <Skill/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  )
}

export default App