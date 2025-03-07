import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/Products/productAction";
import { ADD_TO_CART } from '../features/Cart/CartAction';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Products() {
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState(''); // State for sorting option
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);
    const MySwal = withReactContent(Swal)
    const cartlen = carts ? carts.length + 1 : 1;

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products on mount
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Filter products based on the search query
    const filteredProducts = search
        ? products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    // Sort products based on the selected option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price-asc') {
            return a.price - b.price; // Sort by price (low to high)
        } else if (sortOption === 'price-desc') {
            return b.price - a.price; // Sort by price (high to low)
        } else if (sortOption === 'title-asc') {
            return a.title.localeCompare(b.title); // Sort by title (A-Z)
        } else if (sortOption === 'title-desc') {
            return b.title.localeCompare(a.title); // Sort by title (Z-A)
        }
        return 0; // Default: no sorting
    });

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSort = (event) => {
        setSortOption(event.target.value); // Update sorting option
    };

    const addoToCart = (value) =>{
        let cart = { id: cartlen, productId: value.id, price: value.price, quantity: 1 };
        dispatch({ type: ADD_TO_CART, payload: cart  })
        MySwal.fire({
            title: <p>Product Added</p>,
            icon: "success",
            showConfirmButton: false,
            timer: 1500
            // didOpen: () => {
            //   // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            //   MySwal.showLoading()
            // },
          })
    }

    return (
        <div style={{ padding: "10px" }}>
            <h1>Products</h1>
            <h2>
                <input
                    type="search"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
                />
                <select
                    value={sortOption}
                    onChange={handleSort}
                    style={{ marginLeft: '20px', padding: '10px' }}
                >
                    <option value="">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="title-asc">Title: A-Z</option>
                    <option value="title-desc">Title: Z-A</option>
                </select>

            </h2>
            <div>
                <h3 style={{textAlign:'right'}}><NavLink to={'/cart'}>View Cart</NavLink></h3>
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((value, index) => (
                        <div key={index} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', height: "30vh", float: "left", width: "25%" }}>
                            <h3 style={{ textOverflow: "ellipsis" }}>{value.title}</h3>
                            <img src={value.image} alt={value.title} style={{ width: '100px', height: '100px' }} />
                            <p>Price: ${value.price}</p>
                            <div>
                                <button style={{ textAlign: 'left' }} onClick={() => addoToCart(value)}>Add To Cart</button>
                                <NavLink style={{ textAlign: 'right' }} to={'/view-products/' + value.id}>View Product</NavLink>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No products found</div>
                )}
            </div>
        </div>
    );
}

export default Products;
