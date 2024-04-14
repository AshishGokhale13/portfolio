import React, { useEffect } from 'react';
import './about.css';
import profile from '../../../assets/images/images.png';
import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdAddCall } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

function About({key}) {
    useEffect(() => {
        window.document.getElementById(`About-${key}`).scrollTop = -165; // Use the key prop to identify the element
      }, [key]);

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
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div variants={motionVariant} initial="hidden" animate="visible" exit="exit" className="about" id={`About-${key}`}>
      <div className="about-info">
        <div>
          <h3 className="about-title">
            Mr. Ashish Gokhale <small title="from M.S Bidve Engineering college Latur">Software Engineer </small>
          </h3>
          <h2 className="sub-title">
            <ul>
              <li>FrontEnd Developer</li>
              <li>Backend Developer</li>
              <li>Automation Tester</li>
            </ul>
          </h2>
          <p>
            Results-oriented and highly skilled Frontend Developer with a passion for creating engaging and user-friendly
            web experiences. Seeking a challenging position to leverage expertise in HTML, CSS, JavaScript, and modern
            frontend frameworks to contribute to innovative projects. Dedicated to staying current with industry trends
            and continuously enhancing skills to deliver high-quality, responsive, and visually appealing websites.
          </p>

          <div className="about-btns">
            <button className="about-btn">
              <FiLinkedin />
            </button>
            <button className="about-btn">
              <FiInstagram />
            </button>
            <button className="about-btn">
              <FiMail />
            </button>
            <button className="about-btn">
              <MdAddCall />
            </button>
            <button className="resume">
              {' '}
              <RiPagesFill /> Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className="about-logo">
        <img src={profile} alt="Profile of Mr. Ashish Gokhale" />
      </div>
    </motion.div>
  );
}

export default About;
