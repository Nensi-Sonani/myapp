// ProductDetails.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
  };

  const handleBuyNow = () => {
    const productWithQuantity = { ...product, quantity };
    navigate('/payment', { state: productWithQuantity });
  };

  if (loading) return <h3 className="text-center my-5">Loading...</h3>;

  return (
    <div className="container my-5">
      <Card className="shadow-lg border-0 rounded p-4">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
              style={{ height: "400px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">{product.category.toUpperCase()}</p>
            <h4 className="fw-bold">{product.price}</h4>
            <p className="text-secondary">{product.description}</p>

            <div className="d-flex align-items-center my-3">
              <Button variant="outline-dark" onClick={() => handleQuantityChange("decrease")}>-</Button>
              <span className="mx-3 fs-5">{quantity}</span>
              <Button variant="outline-dark" onClick={() => handleQuantityChange("increase")}>+</Button>
            </div>

            <div className="d-flex">
              <Button variant="primary" className="mt-3" onClick={handleAddToCart}>Add to Cart</Button>
              <Button variant="primary" className="mt-3 ms-3 px-4" onClick={handleBuyNow}>Buy Now</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
