import { useReducer } from "react";

const initialState = {
    count: 0,
    todos: [
        { name: "Todo 1", completed: false },
        { name: "Todo 2", completed: false },
        { name: "Todo 3", completed: false },
    ],
};

function reducers(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "ADDTODO":
            const newTodo = { name: `Todo ${state.todos.length + 1}`, completed: false };
            return { ...state, todos: [...state.todos, newTodo] };
        case "TOGGLE_TODO":
            const updatedTodos = state.todos.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            );
            return { ...state, todos: updatedTodos };
        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter((_, index) => index !== action.index);
            return { ...state, todos: filteredTodos };
        default:
            return state;
    }
}

function ReducerHook() {
    const [state, dispatch] = useReducer(reducers, initialState);

    return (
        <div>
            <h1>Reducer Hook</h1>
            <h2>Counter App</h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>

            <h2>Todo App</h2>
            <button onClick={() => dispatch({ type: "ADDTODO" })}>ADD TODO</button>
            {state.todos.map((todo, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch({ type: "TOGGLE_TODO", index })}
                    />
                    {todo.name}
                    <button onClick={() => dispatch({ type: "REMOVE_TODO", index })}>
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ReducerHook;
