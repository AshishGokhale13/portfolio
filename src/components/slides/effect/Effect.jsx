import React, { useState, useEffect } from 'react'
import './effect.css'
import { useLocation } from 'react-router-dom';
import { GiTrophy,GiDiamondTrophy } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6"
import { MdWatchLater } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";


function Effect() {

  const [value, setValue] = useState([]);
  const [count, setCount] = useState(1);
  const location = useLocation();
  const { hash, pathname, search } = location;
  
 
  const Buble = () => {
    let arr = [];
    for (let i = 0.3; i < 12; i++) {
      arr.push(<div key={i} className='buble'
        style={{
          left: i * 100 + "px",
          animationDelay: Math.random() * 2.5 + 1 + "s",
          animationDirection: ""
        }}
      ></div>);
    }
    return (arr)
  }


  const SkillsEffect = () => {
    let num = Math.round(Math.random() * 4);
    let num2 = Math.round(Math.random() * 5);
    return <>
      <div className='SkillsEffect'>
        <div className='sq-reverse' style={{ top: num * 10 + "px", right: num * 10 + "px", borderRadius: num2 + 13 + "px " + num * 4 + "px", height: (num + 1) * 45 + "px", width: (num + 1) * 45 + "px" }}></div>
        <div className='sq-reverse ' style={{ bottom: num * 10 + "px", left: num * 10 + "px", borderRadius: num * 5 + "px", height: (30 * num2) + 50, width: (num2) * (num * 1 + 20) }}></div>
        <div className='square' style={{ bottom: num * 10 + "px", right: num2 * 40 + "px", borderRadius: (num + 1) * 8 + "px", height: "150px", width: "150px" }}></div>
        <div className='square' style={{ top: num * 10 + "px", left: num2 * 50 + "px", borderRadius: num2 + 13 + "px " + num2 * 2 + "em", height: (num + 1) * 30 + "px", width: (num2 + 1) * 50 + "px", animationDirection: "reverse" }}></div>

      </div>
    </>
  }

  const CertificateEffect = () => {
    let num = Math.round(Math.random() * 3);
     return <>
          <div className='certificatesEffect'>
            <div className='emogis'>
            <div className='emoji-Item'><GiTrophy  className='emoji one' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><FaBookmark  className='emoji two' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><FaBookAtlas  className='emoji three' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><MdWatchLater  className='emoji four' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><FaLaptopCode  className='emoji five' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><FaMobileScreen  className='emoji six' style={{height:(num+2)*1.5+'rem',width:(num+2)*1.5+'rem' }}/></div>
            <div className='emoji-Item'><GiDiamondTrophy   className='emoji seven' style={{height:(num+1)*1.5+'rem',width:(num+1)*2+'rem' }}/></div>
            </div>
          </div>
    </>;
  }


  const ProjectEffects=()=>{
    return <>
          <div className='projectEffect'>
            
          </div>
    </>
  }

  const Buble1 = () => {
    let arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push(<div key={i} className='buble'
        style={{
          color: "yellow",
          backgroundColor: "yellow",
          left: i * 100 + "px",
          bottom: (i * Math.random() * 30 + 1) + "px",
          animationDelay: Math.random() * 0.2 + "s",
          animationDirection: "",
          animationIterationCount: 1
        }}
      ></div>);
    }
    return (arr)
  }


  return (
    <div className='effect'>
      <div className='shapes'>
        {
          pathname == '/about' || pathname =="/" ?
            <>
              <div className='left-corner-circle'>
              </div>
              <div className='right-corner-bottom-circle'>
              </div>
            </>
            : pathname == '/experience' ? <> <div className='bubles1'><Buble1 /></div> <div className='bubles'><Buble /></div></>
              : pathname == '/skills' ? <><SkillsEffect /> </>
              : pathname == '/certificates' ? <><CertificateEffect/> </>
              : pathname == '/projects' ? <><ProjectEffects/> </>
              : <></>
        }
      </div>
    </div>
  )
}
export default Effect