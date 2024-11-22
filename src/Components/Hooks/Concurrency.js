import React, { useState, useTransition, useDeferredValue, useId,useInsertionEffect } from 'react';

function DynamicStyledComponent({ color }) {
    useInsertionEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = `
        .dynamic {
          color: ${color};
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, [color]);
  
    return <div className="dynamic">This text is styled dynamically!</div>;
  }

function Concurrency() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredValue = useDeferredValue(inputValue);

  // Function to generate a large list of items
  const generateList = (value) => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push(`${value} ${i}`);
    }
    return data;
  };

  console.log("userId",useId());

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Use startTransition to defer updating the large list
    startTransition(() => {
      const newList = generateList(value);
    //   setList(newList);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Immediate value: {inputValue}</p>
      <p>Deferred value: {deferredValue}</p>
      <DynamicStyledComponent color="blue" />
      {isPending && <p>Updating list...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Concurrency;
