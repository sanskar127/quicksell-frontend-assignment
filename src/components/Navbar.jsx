import React, { useContext, useState, useEffect } from 'react';
import { Display, Dropdown } from '../components/Icons';
import './stylesheet.css';
import { DataContext, StoreContext } from '../context/ContextApi';

const DropdownMenu = ({ label, list }) => {
  const { display, setDisplay } = useContext(StoreContext);
  const [selectedOption, setSelectedOption] = useState(display[label] || list[0]);

  useEffect(() => {
    setSelectedOption(display[label] || list[0]);
  }, [display, label, list]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setDisplay({
      ...display,
      [label]: selectedValue,
    });
  };

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
  );
};

const DisplayExpand = ({ state }) => {
  const listData = useContext(DataContext);
  return (
    <div className={`display-main ${state === true ? 'show' : ''}`}>
      <DropdownMenu label='Grouping' list={listData.Grouping} />
      <DropdownMenu label='Ordering' list={listData.Ordering} />
    </div>
  );
};

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const { state } = useContext(StoreContext);

  useEffect(() => {
    setExpand(state?.expand ?? false);
  }, [state?.expand]);  

  return (
    <nav className='nav'>
      <div className='nav-main'>
        <div className='display-wrapper'>
          <button className='display-btn' onClick={() => setExpand((prevExpand) => !prevExpand)}>
            <img src={Display} alt='Display' style={{ transform: 'rotate(270deg)', fill: '#373737' }} />
            <span>Display</span>
            <img src={Dropdown} alt='dropdown' />
          </button>
          <DisplayExpand state={expand} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
