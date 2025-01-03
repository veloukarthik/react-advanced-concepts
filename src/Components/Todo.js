import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import fetchTodos from "../features/Todo/Action";

function Todo() {
    const [input, setInput] = useState('');
    const { todos, loading, error } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("todos", todos);


    return (
        <div>
            <h1>Todos</h1>
            {todos && todos.map((todo, index) => (
                <div key={index}>
                    <h2>{todo.title}</h2>
                </div>
            ))}
            <br></br>
        </div>);
}

export default Todo;