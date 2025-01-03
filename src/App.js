import './App.css';
import React, { Profiler, useEffect, memo } from 'react';
import Counter from './Components/Counter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todo from './Components/Todo';
import Cart from './Components/Cart';
import Posts from './Components/Posts';
import Users from './Components/Users';
import UserHook from './Components/UserHook';
import CustomHooks from './Components/CustomHooks';
import Fiber from './Components/Fiber';
import Reference from './Components/Reference';
import ReducerHook from './Components/Hooks/ReducerHookCounter';
import ReducerShoppingCart from './Components/Hooks/ReducerShoppingCart';
import ReducerAuthentication from './Components/Hooks/ReducerAuthentication';
import ReducerMultiStepForm from './Components/Hooks/ReducerMultiStepForm';
import MemoFilterList from './Components/Hooks/MemoFilterList';
import MemoChildRender from './Components/Hooks/MemoChildRender';
import { AppProvider } from './Components/Hooks/AppContext';
import Profile from './Components/Profile';
import Products from './Components/Products';
import ViewProduct from './Components/ViewProduct';
import Concurrency from './Components/Hooks/Concurrency';
import HighOrderComponent from './HOC/HighOrderComponent'
import WebSocketChat from './Components/WebSocketChat';
import ErrorBoundary from './Components/ErrorBoundary'
import RefHook from './Components/Hooks/RefHook';
import Buttons from './Components/Button';
import ChildComponent from './Components/ChildComponent';



function App() {

  const routes = [
    {
      path: "/",
      element: <Counter />,
    },
    {
      path: "chat",
      element: <WebSocketChat />
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path:"/child",
      element:<ChildComponent />
    },
    {
      path:"/ref",
      element:<RefHook />
    },
    {
      path:"/buttons",
      element:<Buttons />
    },
    {
      path: "/user",
      element: <UserHook />,
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/memochild-render",
      element: <MemoChildRender />
    },
    {
      path: "/memofilter-list",
      element: <MemoFilterList />
    },
    {
      path: "/customhooks",
      element: <CustomHooks />,
    },
    {
      path: "/reducer-hook",
      element: <ReducerHook />
    },
    {
      path: "/concurrency",
      element: <Concurrency />
    },
    {
      path: '/reducer-auth',
      element: <ReducerAuthentication />
    },
    {
      path: '/multistep-form',
      element: <ReducerMultiStepForm />
    },
    {
      path: '/shopping-cart',
      element: <ReducerShoppingCart />
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/reference",
      element: <Reference />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/view-products/:id',
      element: <ViewProduct />
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/fiber",
      element: <Fiber />,
    }
  ];

  const router = createBrowserRouter(routes);

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
    // console.log(`Profiler ${id} [${phase}]:`);
    // console.log(`Actual duration: ${actualDuration}`);
    // console.log(`Base duration: ${baseDuration}`);
    // console.log(`Start time: ${startTime}`);
    // console.log(`Commit time: ${commitTime}`);
  };

  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="App" style={{ padding: "10px" }}>
          {/* Primary Button */}
          <Profiler id="App" onRender={onRenderCallback}>
            <RouterProvider router={router} />
          </Profiler>
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default memo(HighOrderComponent(App));
