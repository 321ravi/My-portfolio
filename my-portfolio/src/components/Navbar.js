import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import{motion} from 'framer-motion';

const Navbar = () => {
  const [active,setActive] = useState('About');
  
  useEffect(() => {
    let currentURL = window.location.href
    console.log(currentURL);
    if (currentURL.endsWith('/'))
        setActive('About');
    else if (currentURL.endsWith('/projects'))
        setActive('Projects')
    else if (currentURL.endsWith('/resume'))
        setActive('Resume')

}, [active])

const navbar ={
   
  hidden:{
    y:'-30vh',
    opacity:0
  },

  visible:{
    y:0,
    opacity:1
  }

}
  return (
    <motion.div className='navbar'
      variants={navbar}
      initial='hidden'
      animate='visible'
    >
         <div className="active">
            {active}
         </div>
         <div className="navbar_items">
          {active !== 'About' && 
             <Link to="/">
              <div className="navbar_item" onClick={()=> setActive('About')} >About</div>
              </Link>
        
          }

          {
             active !== 'Resume' ? 
             <Link to="/resume">
             <div className="navbar_item" onClick={()=> setActive('Resume')}>Resume</div>
             </Link>
             
             
             :null
          }

           {
               active!= 'Projects' &&
               <Link to="/projects">
            <div className="navbar_item" onClick={()=> setActive('Projects')}>Projects</div>
            </Link>

          }            
         </div>

    </motion.div>
  )
}

export default Navbar
