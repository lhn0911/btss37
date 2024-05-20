import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function B4() {

  const { theme } = useContext(ThemeContext);

  const buttonColorName = theme === 'blue' ? 'Blue' : 'Red';

  return (
    <div>
      <p>Button Background Color: {buttonColorName}</p>
    </div>
  );
}
