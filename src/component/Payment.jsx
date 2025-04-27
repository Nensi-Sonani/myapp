// Payment.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
    const { state: product } = useLocation();
    const navigate = useNavigate()

    const showToasts = async () => {
        try {
            const token = localStorage.getItem("token"); // Get the token from localStorage
    
            const response = await fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // <-- Add Authorization header
                },
                body: JSON.stringify(product),
            });
    
            if (!response.ok) {
                throw new Error("Failed to place order");
            }
    
            toast.success("Order placed successfully!");
            navigate("/thanks");
        } catch (error) {
            console.error("Error saving order:", error);
            toast.error("Failed to place order.");
        }
    };
    


    if (!product) {
        return <div className="text-center my-5">No product selected.</div>;
    }

    return (
        <div>
            <section>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-lg-7 col-xl-5">
                            <div className="card">
                                <img
                                    src={product.image}
                                    className="card-img-top mx-auto d-block my-3"
                                    alt={product.title}
                                    style={{ width: "95%", height: "auto" }}
                                />

                                <div className="card-body">
                                    <div className="card-title d-flex justify-content-between mb-0">
                                        <p className="text-muted mb-0">{product.title}</p>
                                        <p className="mb-0">{product.price}</p>
                                    </div>
                                </div>
                                <div className="rounded-bottom bg-body-tertiary">
                                    <div className="card-body">
                                        <p className="mb-4">Your payment details</p>
                                        <div className="form-outline mb-3">
                                            <input type="text" className="form-control" placeholder="1234 5678 1234 5678" />
                                            <label className="form-label">Card Number</label>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div className="form-outline">
                                                    <input type="password" className="form-control" placeholder="MM/YYYY" />
                                                    <label className="form-label">Expire</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-outline">
                                                    <input type="password" className="form-control" placeholder="Cvv" />
                                                    <label className="form-label">Cvv</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-info btn-block" onClick={showToasts}>
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Payment;
