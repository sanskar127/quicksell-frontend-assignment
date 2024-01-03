import React, { useContext, useState } from 'react'
import { display, dropdown } from '../components/Icons'
import './stylesheet.css'
import { DataContext } from '../context/ContextApi'

const DropdownMenu = ({ label, list }) => {
  const [selectedOption, setSelectedOption] = useState(list[0])

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value)
  }

  return (
      <div className='dropdown'>
          <label>{label}</label>
          <select value={selectedOption} onChange={handleOptionChange}>
              {list.map((option, index) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
              ))}
          </select>
      </div>
  )
}

const DisplayExpand = ({ state }) => {
  const listData = useContext(DataContext)
  return (
      <div className={`display-main ${state === true ? "show" : ""}`}>
          <DropdownMenu label="Grouping" list={listData.Grouping} />
          <DropdownMenu label="Ordering" list={listData.Ordering} />
      </div>
  )
}

const Navbar = ({}) => {
  const [expand, setExpand] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-main">
        <div className="display-wrapper">
          <button className='display-btn' onClick={() => setExpand(state => !state)}>
            <img src={display} alt="Display" style={{ transform: "rotate(270deg)", fill: "#373737" }} />
            <span>Display</span>
            <img src={dropdown} alt="dropdown" />
          </button>
          <DisplayExpand state={expand} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
