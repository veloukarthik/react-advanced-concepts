// HomePage.jsx
import React from 'react';
import { useUser } from './Hooks/UserContext';

const UserHome = () => {
  const { user, setUser } = useUser();

  const handleClick = () => {
    if (user != 'Guest'){
        setUser('Guest');
    }
    else{
        setUser('John Doe');
    }
  }

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <button onClick={() => handleClick()}>Login as {user}</button>
    </div>
  );
};

export default UserHome;
