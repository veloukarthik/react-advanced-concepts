import { FETCH_TODO_FAILED, FETCH_TODO_SUCCESS, FETCH_TODO_REQUEST } from './Action';

const initialState = {
    loading: false,
    todos: [],
    error: ''
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return { ...state, loading: true };
        case FETCH_TODO_SUCCESS:
            return { loading: false, todos: action.payload, error: "" };
        case FETCH_TODO_FAILED:
            return { loading: false, todos: [], error: action.payload };
        default:
            return state;
    }
}

export default todoReducer;