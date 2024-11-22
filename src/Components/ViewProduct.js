import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/Products/productAction";
import { useParams,NavLink } from 'react-router-dom';
import { ADD_TO_CART } from '../features/Cart/CartAction';


function ViewProduct() {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id));
        }
        // Dispatch action on component mount
    }, [dispatch])
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const cartlen = carts ? carts.length + 1 : 1;
    return (
        <div style={{ width: "80%", margin: "auto", display: "block" }}>
            <h3 style={{textAlign:'right'}}><NavLink to={'/cart'}>View Cart</NavLink></h3>
            <h1>View Product</h1>
            <div style={{ margin: "10%" }}>
                <div style={{ float: 'left', width: "40%" }}>
                    <img src={products.image} alt={products.image} style={{ width: "80%", margin: "20px", display: "block" }} ></img>
                </div>
                <div style={{ float: 'left', width: "40%" }}>
                    <h3>{products.title}</h3>
                    <p>Price: {products.price}</p>
                    <p>Quantity: <input type="number" min={1} max={10} value={quantity} onChange={(e) => setQuantity(e.target.value)} /></p>
                    <h4>Description: {products.description}</h4>
                    <button onClick={()=>dispatch({type:ADD_TO_CART,payload:{id:cartlen,productId:products.id,price:products.price}})}>Add To Cart</button>
                </div>

            </div>
        </div>);
}

export default ViewProduct;