import React, { useContext, useState } from 'react'
import { display, dropdown } from '../components/Icons'
import './stylesheet.css'

const DropdownMenu = ({ label, list }) => {
  const [selectedOption, setSelectedOption] = useState(list[0])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className='dropdown'>
      <label>{label}:</label>
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

const DisplayExpand = ({state}) => {
  <div className={`display-main ${state === true ? "show" : ""} `}>
    <DropdownMenu label="Grouping" list={["Status, User, Priority"]} />
    <DropdownMenu label="Ordering" list={["Priority", "Title"]}/>
  </div>
}

const Navbar = () => {
  const [expand, setExpand] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-main">
        <button className='display-btn' onClick={() => setExpand(state => !state)}>
          <img src={display} alt="Display" style={{ transform: "rotate(270deg)", fill: "#373737" }} />
          <span>Display</span>
          {console.log(expand)}
          <img src={dropdown} alt="dropdown" />
        </button>
      </div>
      <DisplayExpand state={expand} />
    </nav>
  )
}

export default Navbar
