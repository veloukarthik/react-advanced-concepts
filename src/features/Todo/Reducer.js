import {ADDTODO,COMPLETETODO,DELETETODO} from './Action';

const initialState = {
  todos: ['Todo 1', 'Todo 2', 'Todo 3']
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case COMPLETETODO:
            console.log(action.payload);
            return {
                ...state,
                todos: state.todos.filter((todo) => todo !== action.payload)
            };
        case DELETETODO:
            console.log(action.payload);
            return {
                ...state,
                todos: state.todos.filter((todo) => todo !== action.payload)
            };
        default:
            return state;
    }
}

export default todoReducer;