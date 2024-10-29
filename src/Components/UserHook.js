// App.jsx
import React from 'react';
import { UserProvider } from './Hooks/UserContext';
import UserHome from './UserHome';


const App = () => {
  return (
    <UserProvider>
      <UserHome />
    </UserProvider>
  );
};

export default App;
