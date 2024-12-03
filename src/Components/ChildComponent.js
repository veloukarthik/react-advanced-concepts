import React, { useState, useEffect } from 'react';

function Child({ todo, handleClick, input, todoEdit }) {
  const [Input, setInput] = useState(input);
  const [edit, setEdit] = useState(todoEdit);
  const [index, setIndex] = useState(-1);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInput(input);
  }, [input, todo, handleClick]);

  const updateTodo = (value, index) => {
    setInput(value);
    setEdit(true);
    setIndex(index);
  };

  const handleSubmit = () => {
    setEdit(false);
    handleClick(Input, index);
    setIndex(-1);
  };

  return (
    <div>
      <h1>Todo</h1>
      {todo &&
        todo.map((value, index) => (
          <li key={index} style={{marginBottom: '10px'}}>
            {value} &nbsp;
            <button  onClick={() => updateTodo(value, index)} style={{rotate:"90deg"}}>&#9998;</button>&nbsp;&nbsp;
            <button onClick={() => handleClick('',index)}>&times;</button>
          </li>
        ))}
      <input type="text" value={Input} onChange={handleChange} />
      &nbsp;
      <button onClick={() => handleSubmit()}>{edit ? 'EDIT' : 'ADD'}</button>
    </div>
  );
}

function ChildComponent() {
  const [list, setList] = useState(['Todo 1', 'Todo 2']);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(false);
  const handleClick = (value='', index) => {
    if (value && index > -1) {
      // Create a new list with updated value
      const updatedList = [...list];
      updatedList[index] = value;
      setList(updatedList);
    } else if (value && index === -1) {
      setList((prev) => [...prev, value]);
    }
    else {

      const updatedList = list.filter((_, i) => {
        console.log("i",i,index);
        if(i !== index)
        {
            return true;
        }
        return false;
        
    });
      console.log("updatedList",updatedList);
      setList(updatedList);
    }
    setInput('');
    setEdit(false);
  };

  return (
    <div>
      <Child
        todo={list}
        input={input}
        todoEdit={edit}
        handleClick={handleClick}
      />
    </div>
  );
}

export default ChildComponent;
