
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Product from './component/Product';
import ProductDetail from './component/ProductDetails';
import { CartProvider } from "./Context/CartContext";
import Home from './component/Home';
import Footer from './component/Footer';
// import Login from './component/Login';
import Registration from './component/Auth/Registration.jsx';
import Login from './component/Auth/Login.jsx';
import Payment from './component/Payment.jsx';
import { ToastContainer } from 'react-toastify';
import Thankyou from './component/Thankyou.jsx';
import About from './component/About.jsx';
import Contect from './component/Contect.jsx';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/earrings" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contect />} />
                    <Route path="/thanks" element={<Thankyou />} />
                </Routes>
                <Footer />
                <ToastContainer position="top-center" autoClose={3000} />
            </Router>
        </CartProvider>
    );
};

export default App;
