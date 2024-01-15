import React from 'react'
import './skills.css'

import skillsData from './skillsData'

import html from '../../../assets//images/tech/html.png'
import css from '../../../assets//images/tech/css.png'
import js from '../../../assets//images/tech/JavaScript.png'
import jq from '../../../assets//images/tech/jquery.png'
import python from '../../../assets//images/tech/python.png'
import java from '../../../assets//images/tech/java.jpg'
import mysql from '../../../assets//images/tech/mysql.jpg'
import mongo from '../../../assets//images/tech/mongodb.png'
import postgre from '../../../assets//images/tech/postgre.png'
import junit from '../../../assets//images/tech/Junit.png'
import testng from '../../../assets//images/tech/testng.png'
import selenium from '../../../assets//images/tech/seleneum.png'
import cucumber from '../../../assets//images/tech/cucumber.png'
import springboot from '../../../assets//images/tech/springBoot.png'
import postman from '../../../assets//images/tech/postman.jpg'
import git from '../../../assets//images/tech/git.png'
import react from '../../../assets//images/tech/reactjs.png'
import redux from '../../../assets//images/tech/redux.png'
import tailwind from '../../../assets//images/tech/tailwind.png'
import { useState } from 'react'




function Skills() {

    const [skills, setSkills] = useState(skillsData);
    const [skillsItem,setSkillsItem]=useState(skillsData);
   
    const setFilter=(e)=>{
        let a=e.target.getAttribute('filter');
        setSkills(a?skillsItem.filter((x) => x.category === a):skillsItem)
    }
    const SkillItem = () => {
        return (<>
            {
              skills.map((data,index)=>
                    <div className='skill-item' key={index}>
                        <div className='skill-Icon'>
                            <img src={data.img} />
                        </div>
                        <div className='Skill_percentage'>
                            <p className='skill-title'>{data.name}</p>
                        </div>
                    </div>
              ) 
            }
        </>)
    }


    return (
        <div className='skills'>
            <div className='skills-container'>
                <div className='skills-row'>
                    <div className='skills-menu'>
                        <button onClick={setFilter}>All</button>
                        <button onClick={setFilter} filter="web">Web Technologies</button>
                        <button onClick={setFilter} filter="prgm">Programming Languages</button>
                        <button onClick={setFilter} filter="frm">Framework</button>
                        <button onClick={setFilter} filter="db">Databases</button>
                        <button onClick={setFilter} filter="tool">Tools</button>
                    </div>
                </div>
               
                <div className='skills-row'>
                    <SkillItem/>
                </div>
                
            </div>
        </div>
    )
}
export default Skills
