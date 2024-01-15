import React from 'react'
import './projects.css'
import att from '../../../assets/images/projects/ATT5G.jpg'
import { useState } from 'react'

function Projects() {

    const [cardToggle, setCardToggle] = useState(0)
    const toggleCard = (e) => {
        e.currentTarget.classList.add('is-flipped');
    }
    const flipback = (e) => {
        e.currentTarget.classList.remove('is-flipped');
    }

    
    return (
        <div className='projects'>
            <div className='projects-container'>
                <div className='projects-row'>
                    <div className='project-col'>
                        <div className='project-detail'>
                            <div className='card' onClick={toggleCard} onMouseLeave={flipback}>
                                <div class="card__face card__face--front">
                                    <img src={att} />
                                </div>
                                <div class="card__face card__face--back">{cardToggle}</div>
                            </div>
                        </div>
                        <div className='project-title'>
                                Edge Dispatch System
                            </div>
                            <div className='project-technology'>
                                    <ul>
                                    <li>React JS</li>    
                                    <li>Spotify API</li>    
                                    <li>Node JS</li>
                                    <li>Mongo DB</li> 
                                    </ul>
                            </div>
                    </div>
                    <div className='project-col'>
                        <div className='project-detail'>
                            <div className='card' onClick={toggleCard} onMouseLeave={flipback}>
                                <div class="card__face card__face--front">
                                    <img src={att} />
                                </div>
                                <div class="card__face card__face--back">{cardToggle}</div>
                            </div>
                        </div>
                        <div className='project-title'>
                                Edge Dispatch System
                            </div>
                            <div className='project-technology'>
                                    <ul>
                                    <li>React JS</li>    
                                    <li>Spotify API</li>    
                                    <li>Node JS</li>
                                    <li>Mongo DB</li> 
                                    <li>Spotify API</li>    
                                    <li>Node JS</li>
                                    <li>Mongo DB</li> 
                                    </ul>
                            </div>
                    </div>
                    <div className='project-col'>
                        <div className='project-detail'>
                            <div className='card'  onClick={toggleCard} onMouseLeave={flipback}>
                                <div class="card__face card__face--front">
                                    <img src={att} />
                                </div>
                                <div class="card__face card__face--back">{cardToggle}</div>
                            </div>
                        </div>
                        <div className='project-title'>
                                One Stop Wondors
                            </div>
                            <div className='project-technology'>
                                    <ul>
                                    <li>React JS</li>    
                                    <li>Spotify API</li>    
                                    <li>Node JS</li>
                                    <li>Mongo DB</li> 
                                    </ul>
                            </div>
                    </div>
                    <div className='project-col'>
                        <div className=''>
                            <div className='project-detail'>
                                <div className='card'  onClick={toggleCard} onMouseLeave={flipback}>
                                    <div class="card__face card__face--front">
                                        <img src={att} />
                                    </div>
                                    <div class="card__face card__face--back">{cardToggle}</div>
                                </div>

                            </div>
                            <div className='project-title'>
                                Spotify clone
                            </div>
                            <div className='project-technology'>
                                    <ul>
                                    <li>React JS</li>    
                                    <li>Spotify API</li>    
                                    <li>Node JS</li>
                                    <li>Mongo DB</li> 
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects