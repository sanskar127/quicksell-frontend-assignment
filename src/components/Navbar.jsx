import React, { useContext, useState } from 'react'
import { display, dropdown } from '../components/Icons'
import DisplayExpand from './ExpandedContainer'
import './stylesheet.css'

const Navbar = () => {
  const [expand, setExpand] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-main">
        <div className="display-wrapper">
          <button className='display-btn' onClick={() => setExpand(state => !state)}>
            <img src={display} alt="Display" style={{ transform: "rotate(270deg)", fill: "#373737" }} />
            <span>Display</span>
            {/* {console.log(expand)} */}
            <img src={dropdown} alt="dropdown" />
          </button>
          <DisplayExpand state={expand} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
