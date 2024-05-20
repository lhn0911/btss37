import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function B3() {
  // Sử dụng useContext để truy cập context
  const { theme } = useContext(ThemeContext);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: theme,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle}>
        Themed Button
      </button>
    </div>
  );
}
