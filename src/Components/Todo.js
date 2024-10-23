import  React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ADDTODO,COMPLETETODO,DELETETODO } from "../features/Todo/Action";

function Todo() {
    const [input,setInput] = useState('');
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleClick = (action, payload) => {
        if(input)
        {
            setInput('');
        }
        dispatch({ type: action, payload: payload });
       
    }
    
    return ( 
    <div>
        <h1>Todos</h1>
        {todos.map((todo, index) => (
            <div key={index}>
                <h2>{todo}</h2>
                <button onClick={() => handleClick(COMPLETETODO, todo)}>Complete</button>
                <button onClick={() => handleClick(DELETETODO, todo)}>Delete</button>
            </div>
        ))}
        <br></br>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Todo" /> 
        <button onClick={() => handleClick(ADDTODO, input)}>Add Todo</button>
    </div> );
}

export default Todo;