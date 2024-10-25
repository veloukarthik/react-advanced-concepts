import logo from './logo.svg';
import './App.css';
import React, { useState, Profiler, useEffect } from 'react';
import Counter from './Components/Counter';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Todo from './Components/Todo';
import Cart from './Components/Cart';
import Posts from './Components/Posts';
import Users from './Components/Users';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Counter />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/users",
      element: <Users />,
    }
  ]);

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
          <RouterProvider router={router} />
      </Profiler>

    </div>
  );
}

export default App;
