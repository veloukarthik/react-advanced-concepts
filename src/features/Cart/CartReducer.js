import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartAction";

const initialState = {
    carts: [],
    // other state properties as needed]
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART payload:", action.payload);

            // Check if the product already exists in the cart
            const existingProductIndex = state.carts.findIndex(
                (cart) => cart.productId === action.payload.productId
            );

            console.log("existing", existingProductIndex);

            if (existingProductIndex !== -1) {
                // If product exists, increase the quantity
                const updatedCarts = state.carts.map((cart, index) => {
                    console.log("index "+index, existingProductIndex);
                    if (index == existingProductIndex) {
                        console.log(cart.quantity,action.payload.quantity);
                        return { ...cart, quantity: cart.quantity + action.payload.quantity }
                    }
                    else {
                        console.log("else cart",cart);
                        return cart;
                    }

                }
                );
                console.log("condition ", updatedCarts)
                return {
                    ...state,
                    carts: updatedCarts,
                };
            } else {
                // Add new product to the cart
                console.log("else", action.payload.quantity)
                return {
                    ...state,
                    carts: [...state.carts, { ...action.payload, quantity: action.payload.quantity || 1 }],
                };
            }

        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART payload:", action.payload);

            return {
                ...state,
                carts: state.carts.filter(cart => cart.productId !== action.payload),
            };

        default:
            return state;
    }
};

export default CartReducer;