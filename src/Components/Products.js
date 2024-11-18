import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/Products/productAction";


function Products() {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products); // Access posts state

    useEffect(() => {
        dispatch(fetchProducts()); // Dispatch action on component mount
    }, [dispatch]);

    console.log("prod", products);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            Products
            {products && products.map((value, index) => {
                return (
                    <div key={index}>
                        <h3>{value.title}</h3>
                        <img src={value.image} style={{width:"100px"}} ></img>
                        <p>Price: {value.price}</p>
                        <a href={'/view-products/'+value.id}>View Product</a>
                    </div>
                )
            })}
        </div>);
}

export default Products;

