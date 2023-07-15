import React from 'react';
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import mightycoder from '../assets/icons/ravi-modified.png';
import resume from '../assets/Ravi_Prakash_Resume.pdf';
import {motion} from 'framer-motion'
const Sidebar = () => {
   const handleEmailMe = () =>{
        window.open("mailto:ravi321pr@gmail.com");
   }

   const sidebar_variant={
      
      hidden:{
        x:'-20vw',
        

      },

      visible:{
         x:0,
         
         transition:{
          delay:0.1,duration:0.5,type:'spring'
         }
      }

   }

  return (
    <motion.div className='sidebar'
       variants={sidebar_variant}
       initial='hidden'
       animate='visible'
    
    >
      <img src={mightycoder} alt="avatar" className='sidebar_avatar'/>
      <div className='sidebar_name'>Ravi <span>Prakash</span></div>
      <div className='sidebar_item sidebar_title'>Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className='sidebar_item  sidebar_resume'>
          <img src={tie} alt="resume" className='sidebar_icon' />Download Resume
        </div>
      </a>

      <figure className='sidebar_social-icon my-2'>
        <a href="https://www.linkedin.com/in/ravi-prakash-b3b710208" target="_blank" ><img src={linkedin} alt="linkdin" className='sidebar_icon me-3'  /></a>
        <a href="https://twitter.com/ImRavi70" target="_blank" ><img src={twitter} alt="Twitter" className='sidebar_icon' /></a>
      </figure>

       <div className="sidebar_contact">
        <div className="sidebar_item,sidebar_github">
        <a href="https://github.com/321ravi" target="_blank" ><img src={github} alt="github" className='sidebar_icon me-3' />Github</a>
        </div>
        <div className='sidebar_location'>
          <img src={pin} alt="location" className='sidebar_icon me-3' />
          Bilaspur,Rampur,UttarPradesh,India</div>
        <div className="sidebar_item">ravi321pr@gmail.com</div>
        <div className="sidebar_item">7017350098</div>
       </div>
       <div className="sidebar_item sidebar_email"  onClick={handleEmailMe}>email me</div>
    </motion.div>
  )
}

export default Sidebar
