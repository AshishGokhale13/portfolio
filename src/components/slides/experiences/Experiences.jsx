import React from 'react'
import './experience.css'
import { motion } from 'framer-motion';
import techm from '../../../assets/images/TechMahindra.png'
function Experiences() {
  const motionVariant = {
    hidden: {
      x: '-10em',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 }
    },
    exit: {
      x: '-10em',
      
    }
  };
  return (
    <motion.div  variants={motionVariant} initial="hidden" animate="visible" exit="exit" className='experience'>

        <div className='company'>
            <div className='role'>
                 <img src={techm}/>
                <h3>  Software Engineer</h3>
                <h4>Experience : 8'<sup>th</sup> OCT, 2021 – Present (2+ Year )</h4>
                <div className='project'>
                <h2>Project Details : EDGE DISPATCH </h2>
                <p>
                The system titled edge (enterprise dispatch GUI environment) is the integrated system for all
                the dispatch orders within AT&T. the various activities include:
                <ul>
                    <li>Take input from OSS layer applications and analyze data, and take decisions for the </li>
                    <li>If requirements and location match then create a ticket and assign technicians for manual interventions based on their schedule, skills, and locations.</li>
                    <li>Perform connectivity testing with the help of other interfacing applications and send output to billing applications. </li>
                </ul>
                </p>
                </div>
            </div>
            <div className='companyLogo'>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Experiences