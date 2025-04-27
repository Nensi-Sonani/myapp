import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import '../Css/Product.css'

const Product = () => {
    const { addToCart } = useContext(CartContext);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState("");
    const [category, setCategory] = useState("all");

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://naieldjewel.onrender.com/product");
                const products = await response.json();
                console.log("Fetched Products:", products);
                setData(products);
                setFilter(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        };

        getProduct();
    }, []);

    const sortProducts = (products, order) => {
        let sortedProducts = [...products];
        if (order === "nameAZ") {
            sortedProducts.sort((a, b) => a.price.localeCompare(b.price));
        } else if (order === "nameZA") {
            sortedProducts.sort((a, b) => b.price.localeCompare(a.price));
        }
        return sortedProducts;
    };

    useEffect(() => {
        let filteredProducts = data.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(
                (product) => product.category?.toLowerCase() === category.toLowerCase()
            );
        }

        const sortedFilteredProducts = sortProducts(filteredProducts, sortOrder);
        setFilter(sortedFilteredProducts);
    }, [search, sortOrder, category, data]);

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    </div>
                </div>

                <div className="row mb-4 justify-content-center">
                    {/* Category Buttons */}
                    <div className="col-auto mb-2">
                        <div className="btn-group" role="group" aria-label="Category filter">
                            {["all", "Earrings", "ring", "bracelet", "necklace"].map((cat) => (
                                <Button
                                    key={cat}
                                    variant={category === cat ? "dark" : "outline-dark"}
                                    onClick={() => setCategory(cat)} style={{borderRight: "1px #fffff solid"}}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="d-flex">
                    <div className="col-md-8">
                        <Form.Control
                            type="text"
                            placeholder="Search products..."
                            className="mb-3"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 ms-4">
                        <Form.Select
                            className="mb-3"
                            value={sortOrder}
                            onChange={(e) => {
                                console.log("Selected sort order:", e.target.value);
                                setSortOrder(e.target.value);
                            }}
                        >
                            <option value="">Sort by</option>
                            <option value="nameAZ">Low To High</option>
                            <option value="nameZA">High To Low</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="row">
                    {loading ? (
                        <h3>Loading...</h3>
                    ) : filter.length > 0 ? (
                        filter.map((product) => (
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4">
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                            style={{ height: "200px", objectFit: "contain" }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.price}</p>
                                        </div>
                                    </Link>
                                    <Button variant="primary" onClick={() => {
                                        console.log("Adding to cart:", product);
                                        addToCart(product);
                                    }}>
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h5 className="text-center">No products found</h5>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
