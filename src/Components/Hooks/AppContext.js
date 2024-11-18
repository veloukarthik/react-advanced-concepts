// AppContext.js

import React, { createContext, useState } from 'react';

// Create the Context
const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
