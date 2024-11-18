import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/Products/productAction";
import { useParams } from 'react-router-dom';

function ViewProduct() {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.products);
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
    return (<div>
        <h1>View Product</h1>
        <div>
            <h3>{products.title}</h3>
            <img src={products.image} style={{ width: "100px" }} ></img>
            <p>Price: {products.price}</p>
            <h4>Description: {products.description}</h4>
        </div>
    </div>);
}

export default ViewProduct;