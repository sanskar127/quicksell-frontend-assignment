import React, { useContext } from 'react'
import { display, dropdown } from '../components/Icons'
import './stylesheet.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-main">
        <button className='display-btn'>
          <img src={display} alt="Display" style={{transform: "rotate(270deg)", fill: "#373737"}} />
          Display
          <img src={dropdown} alt="dropdown" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
