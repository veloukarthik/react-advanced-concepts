import  React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../features/Cart/CartAction";

function Cart() {
    const carts = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const handleClick = (action, payload) => {
        dispatch({ type: action, payload: payload });
    }
    const count = carts.length+1;
    return (
    <div>
        <h1>Cart</h1>
        <button onClick={() => handleClick(ADD_TO_CART, { id: count, name: 'Product '+count, price: count*10 })}>Add to Cart</button>
        {carts.map((item, index) => (
            <div key={index}>
                <h2>{item.name} - { item.price}</h2>
                <button onClick={() => handleClick(REMOVE_FROM_CART, item.id)}>Remove</button>
            </div>
        ))}
    </div> );
}

export default Cart;