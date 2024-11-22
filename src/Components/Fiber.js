import React,{useState} from 'react';
import HeavyList from './HeavyList';



function Fiber() {

    const [text, setText] = useState("Hello!");

    const handleClick = () => {
        setText((prevText) => (prevText === "Hello!" ? "Goodbye!" : "Hello!"));
    };

    return (
        <div>
            <h1>React Fiber</h1>
            <p>React Fiber is a reconciliation algorithm that React uses to efficiently update the UI. It breaks down the render tree into smaller, more manageable chunks called "fibers". Fiber allows React to pause and resume rendering at any time, ensuring smooth animations and better performance.</p>
            <h1>React Fiber Example</h1>
            <button onClick={handleClick}>Toggle Text</button>
            <p>{text}</p>
            <HeavyList />
        </div>
    );
}

export default Fiber;