import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartAction";

const initialState = {
    carts: [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
     ],
    // other state properties as needed]
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter(cart => cart.id !== action.payload)
            };
        default:
            return state;
    }
};

export default CartReducer;