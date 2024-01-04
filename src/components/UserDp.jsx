import React, { useState, useEffect } from 'react';

const UserDp = ({ name }) => {
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
    <div>
      {formattedName}
    </div>
  );
};

export default UserDp;
