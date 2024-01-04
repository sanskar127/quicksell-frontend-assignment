import React, { useState, useEffect } from 'react';
import './stylesheet.css'

const getColor = () => {

  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  const hexComponent = (component) => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const randomHexColor = '#' +
    hexComponent(randomRed) +
    hexComponent(randomGreen) +
    hexComponent(randomBlue);

  return randomHexColor;
}

const UserDp = ({ name, available }) => {
  const [formattedName, setFormattedName] = useState(name);

  useEffect(() => {
    const words = name.split(' ');

    if (words.length >= 2) {
      const first = words[0].charAt(0);
      const second = words[1].charAt(0);

      // Combine the characters and convert to uppercase
      const abbreviation = (first + second).toUpperCase();

      // Set the formatted name with the abbreviation
      setFormattedName(abbreviation);
    }

    if (words.length === 1) {
      setFormattedName(words[0].charAt(0))
    }

  }, [name])

  return (
    <div className="user-icon" style={{ backgroundColor: `${getColor()}` }}>
      <div> {formattedName} </div>
      <div className="available-icon" style={{ backgroundColor: `${available === true ? "rgb(236, 194, 56)" : "gray"}` }} ></div>
    </div>
  );
};

export default UserDp;
