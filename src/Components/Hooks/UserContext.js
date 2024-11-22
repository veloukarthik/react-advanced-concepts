// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component to wrap the context around children components
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Guest');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
