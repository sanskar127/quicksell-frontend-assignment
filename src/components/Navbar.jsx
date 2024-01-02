import React, { useContext } from 'react'
import { useTheme } from '../context/ThemeContext'
import { display, lighttheme, darktheme } from '../components/Icons'
import './stylesheet.css'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className={`nav-${theme}`}>
      <div className="nav-main">
        <button className='display-btn'>
          <img src={display} alt="Display" />
          Display
        </button>
        <button className='theme-btn' onClick={toggleTheme}><img src={theme === 'light'? darktheme : lighttheme} alt={theme === 'light'? 'dark' : 'light'} /></button>
      </div>
    </nav>
  )
}

export default Navbar
