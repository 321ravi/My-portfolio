import React from 'react'
import react from '../assets/icons/react.svg'
import c from '../assets/icons/c.svg'
import cpp from '../assets/icons/c++.svg'
import java from '../assets/icons/java.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'

import js from '../assets/icons/java-script.svg'
import visual from '../assets/icons/visual.svg'
import Node from '../assets/icons/nodej.svg'
import mysql from '../assets/icons/mysql.svg'
import mongo from '../assets/icons/mongodb.svg'
import git from '../assets/icons/git.svg'
import {motion} from'framer-motion'

import Bar from './Bar'

const languages=[
    {
      icon:c,
      name:'C',
      level:'70'

    },
    {
      icon:cpp,
      name:"C++",
      level:'75'

    },

    {
      icon:java,
      name:"Java",
      level:'60'

    },
    
    {
      icon:html,
      name:"HTML",
      level:'90'

    },

    {
      icon:css,
      name:"CSS",
      level:'70'

    },
    {
      icon:js,
      name:"Javascript",
      level:'50'

    },

    

    {
      icon:react,
      name:"React Js",
      level:'60'

    },
    
    
    
    
  ]

  const Tools=[
    {
      icon:visual,
      name:'Vscode',
      level:'70'

    },

    {
      icon:mysql,
      name:"mysql",
      level:'60'

    },

    {
      icon:mongo,
      name:"MongoDB",
      level:'40'

    },

    {
      icon:git,
      name:"Git and Github",
      level:'60'

    },


    
    
  ]
  const resume_variant={
    hidden:{

        opacity:0
      },
    
      visible:{

        opacity:1,
        transition:{
            delay:0.2,duration:0.6
           }

      }
    

}
const Resume = () => {
  return (
    <motion.div className='container resume'
    variants={resume_variant}
    initial='hidden'
    animate='visible'
    >
      <div className='row'>
        <div className="col-lg-6 resume-card">
          <h4 className='resume_heading'>Education</h4>
          <div className="resume_content">
            <h4 className='resume_title'>
              Computer Science Engineering
            </h4>
            <p className="resume_name">Dit University(2020-2024)</p>
            <p className="resume_detail">
              I am currently Pursuing B Tech in Computer Science
              Engineering from Dit University
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className='resume_heading'>Experience</h4>
          <div className="resume_content">
          
            <p className="resume_detail">
            3+ Years Programming and web development
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-lang_heading">Language and Framework</h5>
          <div className="resume-lang_body mt-2">
            {languages.map(language=> 
              <Bar value={language}/>
              )}
          </div>
        </div>

        <div className="col-lg-6 resume-languages">
          <h5 className="resume-lang_heading">Tools and Softwares</h5>
          <div className="resume-lang_body mt-2">
          {Tools.map(tool=> 
              <Bar value={tool}/>
              )}
          </div>
        </div>
      </div>
    
    </motion.div>
  )
}

export default Resume
