import React, { useReducer } from "react";

const initialState = {
    items: [],
    total: 0,
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price * action.payload.quantity,
            };
        case "REMOVE_ITEM":
            const filteredItems = state.items.filter((item, index) => index !== action.index);
            const removedItem = state.items[action.index];
            return {
                ...state,
                items: filteredItems,
                total: state.total - removedItem.price * removedItem.quantity,
            };
        case "UPDATE_QUANTITY":
            const updatedItems = state.items.map((item, index) =>
                index === action.index ? { ...item, quantity: action.quantity } : item
            );
            const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            return { ...state, items: updatedItems, total: newTotal };
        default:
            return state;
    }
}

function ReducerShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = () => {
        const newItem = { name: "Item " + (state.items.length + 1), price: 10, quantity: 1 };
        dispatch({ type: "ADD_ITEM", payload: newItem });
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {state.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity}
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                                dispatch({ type: "UPDATE_QUANTITY", index, quantity: parseInt(e.target.value, 10) })
                            }
                        />
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", index })}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${state.total}</h2>
        </div>
    );
}

export default ReducerShoppingCart;
