import React, { useReducer } from "react";

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, isAuthenticated: true, user: action.payload, error: null };
        case "LOGIN_FAILURE":
            return { ...state, isAuthenticated: false, user: null, error: action.error };
        case "LOGOUT":
            return { ...state, isAuthenticated: false, user: null, error: null };
        default:
            return state;
    }
}

function ReducerAuthentication() {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = () => {
        // Simulate an API call
        const user = { name: "John Doe", email: "john@example.com" };
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div>
            <h1>Authentication</h1>
            {state.isAuthenticated ? (
                <div>
                    <p>Welcome, {state.user.name}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={login}>Login</button>
                    {state.error && <p>Error: {state.error}</p>}
                </div>
            )}
        </div>
    );
}

export default ReducerAuthentication ;
