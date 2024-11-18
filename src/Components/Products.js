import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/Products/productAction";

function Products() {
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState(''); // State for sorting option
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

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

    return (
        <div>
            <h1>Products</h1>
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
            <div>
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((value, index) => (
                        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                            <h3>{value.title}</h3>
                            <img src={value.image} alt={value.title} style={{ width: '100px', height: '100px' }} />
                            <p>Price: ${value.price}</p>
                            <a href={'/view-products/' + value.id}>View Product</a>
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
