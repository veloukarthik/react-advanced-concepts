import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../features/Cart/CartAction";
import { fetchProducts } from '../features/Products/productAction';

function Cart() {
    const carts = useSelector((state) => state.cart.carts); // Access cart items
    const { products, loading, error } = useSelector((state) => state.products); // Access products
    const dispatch = useDispatch();
    const [prodcart, setProdCart] = useState([]); // Local state for product details in the cart

    const handleClick = (action, productId) => {
        dispatch({ type: action, payload: productId });
        setProdCart((prev) => prev.filter((item) => item.id !== productId)); // Remove product from local state
    };

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products when the component mounts
    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(products)) {
            const updatedCart = carts
                .map((cartItem) =>
                    products.find((product) => product.id === cartItem.productId)
                )
                .filter(Boolean); // Filter out undefined products
            setProdCart(updatedCart);
        }
    }, [carts, products]);

    const getQuantity = (pid) =>{
        let data = carts.find((cart)=> cart.productId == pid);
        console.log("quant",carts);
        return data.quantity;
    }

    const getTotalPrice = () =>{
        let total = 0;
        console.log("carts",carts);
        carts && carts.filter((value,index)=>{
            let quantity = getQuantity(value.productId)
            let price = value.price;
            console.log("cart quantity ",quantity*price);
            total = total+(value.price*quantity);
        })
        return total.toFixed(2);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Cart</h1>
            {prodcart.length === 0 ? (
                <h2>Cart is Empty</h2>
            ) : (
                prodcart.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title} | quantity : {getQuantity(item.id)} | Price : ${item.price*getQuantity(item.id)}</h2>
                        <button onClick={() => handleClick(REMOVE_FROM_CART, item.id)}>
                            Remove
                        </button>
                    </div>
                ))
            )}
            <hr />
            <h3>Total : $ {getTotalPrice()}</h3>
        </div>
    );
}

export default Cart;
