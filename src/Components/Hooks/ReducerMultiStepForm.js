import React, { useReducer } from "react";

const initialState = {
    step: 1,
    formData: {
        name: "",
        email: "",
        address: "",
    },
};

function formReducer(state, action) {
    switch (action.type) {
        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };
        case "PREVIOUS_STEP":
            return { ...state, step: state.step - 1 };
        case "UPDATE_FIELD":
            return {
                ...state,
                formData: { ...state.formData, [action.field]: action.value },
            };
        default:
            return state;
    }
}

function ReducerMultiStepForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
    };

    return (
        <div>
            <h1>Step {state.step}</h1>
            {state.step === 1 && (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={state.formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
                </div>
            )}
            {state.step === 2 && (
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={state.formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
                    <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
                </div>
            )}
            {state.step === 3 && (
                <div>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={state.formData.address}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
                    <button onClick={() => alert("Form Submitted!")}>Submit</button>
                </div>
            )}
        </div>
    );
}

export default ReducerMultiStepForm;
