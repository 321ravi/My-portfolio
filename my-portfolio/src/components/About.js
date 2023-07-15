import React from 'react';


import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'


import {motion} from 'framer-motion'
import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: computer,
        title: "Programming Language",
        about: "C, C++, Java, Javascript ",
    },
    
    {
        icon: algo,
        title: "Algo and DS",
        about: "a daily problem solver in GeeksForGeeks and Leetcode"
    },
   
   
]

const project_variant={
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


const About = () => {
    return (
        <motion.div className="about"
        variants={project_variant}
        initial='hidden'
        animate='visible'
        >
            <h6 className="about_intro">
            I am currently pursuing B-Tech 
             Degree(Fourth Year) in Computer 
               Science Engineering from DIT UNIVERSITY and I have 3+ years of experience in web development.
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I am Doing</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;