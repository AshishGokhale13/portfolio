import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { useEffect } from 'react';
import { GiBattleGear } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiNinjaHeroicStance } from "react-icons/gi";


function Sidebar() {

  const [menuToggle, setMenuToggle] = useState(true);



  useEffect((e) => {

    menuToggle ? '' : setTimeout(() => {
      window.document.getElementById("toggleMenus").classList.add('hideme');
    }, 500);
  }, [menuToggle]);

  return (
    <div className='sidebar'>
      <div className='sidebar-title'>
        Ashish Gokhale
      </div>

      <div className='menu-container'>
        <div className='menu-toggle' >
        </div>
        {

          <div id="toggleMenus" className={menuToggle ? 'menus  slide-right' : 'menus slideleft'}>

            <div className='menu-item'>
            <Link className='link' to="/about">
               <div className='dv'>
                <h3><FaUserNinja />About</h3>
              </div>
              <div className='mv'>
              <FaUserNinja />
              </div>
              </Link>
            </div>
            <div className='menu-item'>
            <Link className='link' to="/experience">
               <div className='dv'>
                <h3><GiBattleGear />Experience</h3>
              </div>
              <div className='mv'>
              <GiBattleGear />
              </div>
              </Link>
            </div>
            <div className='menu-item'>
            <Link className='link' to="/skills">
               <div className='dv'>
                <h3><GiRunningNinja /> Skills</h3>
              </div>
              <div className='mv'>
              <GiRunningNinja />
              </div>
              </Link>
            </div>
            <div className='menu-item'>
            <Link className='link' to='/certificates'>
               <div className='dv'>
                <h3> <GiLaurelsTrophy /> Certificates</h3>
              </div>
              <div className='mv'>
              <GiLaurelsTrophy />
              </div>
              </Link>
            </div>
            <div className='menu-item'>
            <Link className='link' to='/projects'>
               <div className='dv'>
                <h3> <GiNinjaHeroicStance /> Projects</h3>
              </div>
              <div className='mv'>
              <GiNinjaHeroicStance />
              </div>
              </Link>
            </div>
          </div>

        }


      </div>
    </div>
  )
}

export default Sidebar