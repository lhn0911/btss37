import React, { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function B1() {
  const [theme, setTheme] = useState('blue');
  const themeContext = useContext(ThemeContext);
  const { theme: contextTheme, setTheme: setContextTheme } = themeContext || {};
  const changeTheme = () => {
    const newTheme = theme === 'blue' ? 'red' : 'blue';
    setTheme(newTheme);
    setContextTheme(newTheme); 
  };

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={changeTheme}>Toggle Theme</button>
    </div>
  );
}
