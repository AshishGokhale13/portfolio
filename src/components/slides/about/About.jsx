import React from 'react'
import './about.css'
import profile from '../../../assets/images/images.png'
import { FiInstagram,FiLinkedin,FiMail} from "react-icons/fi";
import { MdAddCall } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
 function About() {
  return (
    <>
    <div className='about'>

        <div className='about-info'>
            <div>
            <h3 className='about-title'>Mr. Ashish Gokhale <small title="from M.S Bidve Engineering college Latur">Software Engineer </small></h3>
            <h2 className='sub-title'>
                <ul>
                <li>FrontEnd Developer</li>
                <li>Backend Developer</li>
                <li>Automation Tester</li>
                </ul>
            </h2>
            <p>Results-oriented and highly skilled Frontend Developer with a passion for creating engaging and user-friendly web experiences. Seeking a challenging position to leverage expertise in HTML, CSS, JavaScript, and modern frontend frameworks to contribute to innovative projects. Dedicated to staying current with industry trends and continuously enhancing skills to deliver high-quality, responsive, and visually appealing websites.</p>
           
           <div className='about-btns'>
            <button className='about-btn'><FiLinkedin/></button>
            <button className='about-btn'><FiInstagram/></button>
            <button className='about-btn'><FiMail/></button>
            <button className='about-btn'><MdAddCall/></button>
            <button className='resume'> <RiPagesFill/> Download Resume</button>
            </div>
            </div>  
        </div>
        <div className='about-logo'>
        <img src={profile}></img>
        </div>
    </div>
    </>
  )
}

export default About