import React, { forwardRef, useRef } from 'react';

// Child component using forwardRef to receive ref from parent
const CustomButton = forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props}>
      Click Me
    </button>
  );
});

const Reference = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    // Access the child button's DOM node and focus it
    console.log('Click',buttonRef);
    buttonRef.current.focus();
  };

  return (
    <div>
      <h2>forwardRef Example</h2>
      <CustomButton ref={buttonRef} />
      <button onClick={handleClick}>Focus Custom Button</button>
    </div>
  );
};

export default Reference;
