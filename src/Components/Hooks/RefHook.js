import React, { forwardRef, useRef, useState } from 'react';

// Create a component that forwards its ref to an input element
const CustomInput = forwardRef((props, ref) => {
    const [inputs, setInput] = useState("input");
    return (
        <>
            <p>{inputs}</p> 
            <input ref={ref} type="text" placeholder="Enter text here" onChange={(e)=>setInput(e.target.value)} value={inputs} {...props} />
        </>
    )
});

function RefHook() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // Focus the input in CustomInput
        inputRef.current.value="";
        console.log("input", inputRef.current.value);
    };

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default RefHook;
