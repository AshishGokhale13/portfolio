import React from 'react'
import './slides.css'
import Effect from './effect/Effect'
import { Outlet } from 'react-router-dom'

function Slides() {
  return (
    <div className='slides'>
      <div className='slides-item'>
        <Effect />
        <Outlet />
      </div>
    </div>
  )
}

export default Slides