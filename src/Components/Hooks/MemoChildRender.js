import React, { useState, useMemo } from "react";

function ChildComponent({ data }) {
    console.log("Child rendered");
    return <div>Data: {data}</div>;
}

const MemoizedChild = React.memo(ChildComponent);

function MemoChildRender() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const data = useMemo(() => {
        console.log("Calculating data...");
        return `Count is ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Parent Component</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something"
            />
            <MemoizedChild data={data} />
        </div>
    );
}

export default MemoChildRender;
