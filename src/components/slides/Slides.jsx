import React from 'react'
import './slides.css'
import Effect from './effect/Effect'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
function Slides() {
  return (
    <div className='slides'>
      <div className='slides-item'>
        <Effect />
        <AnimatePresence>
        <Outlet />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Slides