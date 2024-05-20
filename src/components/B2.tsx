
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function B2() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; 
  }

  const { theme, setTheme } = themeContext;

  const changeTheme = () => {
    setTheme(theme === 'blue' ? 'red' : 'blue');
  };

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={changeTheme}>Toggle Theme</button>
    </div>
  );
}
