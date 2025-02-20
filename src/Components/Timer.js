import React, { useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start incrementing
  const startCounter = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  // Stop incrementing
  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetCounter = () =>{
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startCounter} disabled={isRunning}>Start</button>
      <button onClick={stopCounter} disabled={!isRunning}>Stop</button>
      <button onClick={resetCounter} disabled={count<=0}>Reset</button>
    </div>
  );
}

export default Timer;
