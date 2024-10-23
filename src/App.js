import logo from './logo.svg';
import './App.css';
import React, { useState, Profiler, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT } from './features/Count/Action';

function App() {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = (action) => {
    dispatch({ type: action });
  }

  useEffect(() => {

  }, [])

  const onRenderCallback = (
    id, // The "id" prop of the Profiler tree that has just committed
    phase, // Either "mount" (for initial render) or "update" (for re-renders)
    actualDuration, // Time spent rendering the committed update
    baseDuration, // Estimated time to render the entire subtree without memoization
    startTime, // When React started rendering this update
    commitTime, // When React committed this update
    interactions // The Set of interactions belonging to this update
  ) => {
    console.log(`Profiler ${id} [${phase}]:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  return (
    <div className="App">
      <Profiler id="App" onRender={onRenderCallback}>
        <h1>Hello World</h1>
        <h1>Count value is {count}</h1>
        <button onClick={() => handleClick(INCREMENT)}>INCREMENT</button> ||
        <button onClick={() => handleClick(DECREMENT)}>DECREMENT</button>
      </Profiler>

    </div>
  );
}

export default App;
