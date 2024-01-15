import React from 'react'
import Sidebar from '../sidear/Sidebar'
import './container.css'
import Slides from '../slides/Slides'
function Container() {
  return (
    <div className='container'>
      <Sidebar/>
      <Slides/>
    </div>
  )
}

export default Container
