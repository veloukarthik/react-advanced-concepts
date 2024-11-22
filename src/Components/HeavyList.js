// HeavyList.js
import React from 'react';

const HeavyList = () => {
  const items = Array.from({ length: 5000 }, (_, i) => i);

  return (
    <div>
      <h2>Heavy List</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{`Item ${item}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyList;
