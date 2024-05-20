import React, { createContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};


const defaultThemeContextValue: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContextValue);

export default ThemeContext;
