import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"; // Import Cart Context
import { Button, Modal, Badge } from "react-bootstrap";

export default function Navbar() {

    const { cart, removeFromCart } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false); // Modal state

    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')) * product.quantity, 0);

    const handleClose = () => setShowCart(false);
    // const handleShow = () => setShowCart(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm navbar-light bg-white">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand fw-bold fs-4"
                        to="/"
                        style={{ fontFamily: '"Antic Didone", serif', color: '#000000' }}
                    >
                        NailedJewel
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto" style={{color:"rgb(164 129 99)"}}>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register
                            </Link>
                            <Button variant="dark" className='ms-2' onClick={() => setShowCart(true)}>
                                <i className="fa fa-shopping-cart"></i> Cart
                                <Badge bg="light" text="dark" className="ms-1">{cart.length}</Badge>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Cart Modal */}
            <Modal show={showCart} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <div key={product.id} className="d-flex align-items-center mb-3">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                />
                                <div className="flex-grow-1">
                                    <h6>{product.title}</h6>
                                    <p className="mb-0">
                                        {product.price} x {product.quantity}
                                    </p>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(product.id)}>
                                    Remove
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <h5>Total: ${totalPrice}</h5>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
