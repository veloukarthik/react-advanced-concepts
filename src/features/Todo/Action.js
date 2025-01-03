export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILED = 'FETCH_TODO_FAILED';

const fetchTodoRequest = () => {
    return {
        type: FETCH_TODO_REQUEST
    };
};

const fetchTodoSuccess = (todos) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: todos
    };
};

const fetchTodoFailed = (error) => {
    return {
        type: FETCH_TODO_FAILED,
        payload: error
    };
};

const fetchTodos = () =>{
    return async (dispatch) => {
        dispatch(fetchTodoRequest());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todos = await response.json();
            dispatch(fetchTodoSuccess(todos));
        } catch (error) {
            dispatch(fetchTodoFailed(error.message));
        }
    };
};
export default fetchTodos;