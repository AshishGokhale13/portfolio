import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { useEffect } from 'react';


function Sidebar() {

    const [menuToggle,setMenuToggle]=useState(true);


    useEffect(() => {
        const handleResize = () => {
          
           if(window.innerWidth>1000){

            setMenuToggle(true);
          }
          else{
            setMenuToggle(false);
          };
        };
        
        window.addEventListener("load", handleResize);

        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('load', handleResize);
        };
      }, []);

      useEffect((e) => {

        menuToggle?'':setTimeout(()=>{
            window.document.getElementById("toggleMenus").classList.add('hideme');
        },500);
      },[menuToggle]);

    return (
        <div className='sidebar'>
              <div className='sidebar-title'>
                Ashish Gokhale  
            </div>
            
            <div className='menu-container'>
            <div className='menu-toggle' onClick={(e)=>(setMenuToggle(menuToggle?false:true))}>
                {menuToggle?<GiCrossMark />:<IoMdMenu />}
            </div>
               {
               
                    <div  id="toggleMenus"  className={menuToggle?'menus  slide-right':'menus slideleft'}>
                   
                    <div className='menu-item'>
                        <h3><Link className='link' to="/about"><FaUserNinja/>About</Link></h3>
                    </div>
                    <div className='menu-item'>
                        <h3><Link className='link' to="/experience">Work Experience</Link></h3>
                    </div>
                    <div className='menu-item'>
                        <h3><Link className='link' to="/skills">Skills</Link></h3>
                    </div>
                    <div className='menu-item'>
                        <h3><Link className='link' to='/certificates'>Certificates</Link></h3>
                    </div>
                    <div className='menu-item'>
                        <h3><Link className='link' to='/projects'>Projects</Link></h3>
                    </div>
                </div>
                
               }
                

            </div>
        </div>
    )
}

export default Sidebar