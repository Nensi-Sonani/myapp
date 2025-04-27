import React, { useState } from 'react'
import '../../Css/Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Registration = () => {
    const [formData, setformData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState({})
    const [isvalid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (eve) => {
        eve.preventDefault();
        let invalid = false;
        let validationError = {};

        if (!formData.fname) {
            invalid = true;
            validationError.fname = "First Name Required";
        }

        if (!formData.lname) {
            invalid = true;
            validationError.lname = "Last Name Required";
        }

        if (!formData.email) {
            invalid = true;
            validationError.email = "Email Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            invalid = true;
            validationError.email = "Email is not valid";
        }

        if (!formData.password) {
            invalid = true;
            validationError.password = "Password Required";
        } else if (formData.password.length < 6) {
            invalid = true;
            validationError.password = "Password must be at least 6 characters";
        }

        setError(validationError);
        setValid(!invalid);

        if (Object.keys(validationError).length === 0) {
            try {
                // Check if user already exists by email
                const response = await axios.get(`http://localhost:8000/users?email=${formData.email}`);
                const existingUsers = response.data;

                if (existingUsers.length > 0) {
                    toast.warn("User already registered with this email");
                    return;
                }

                // If user not found, proceed to register
                await axios.post('http://localhost:8000/users', formData);
                toast.success("Registrer successfully!");
                navigate("/login");
            } catch (error) {
                console.error("Registration failed", error);
                toast.error("Something went wrong. Please try again!");
            }
        }
    };

    return (
        <div>
            {/* <!-- Registration 4 - Bootstrap Brain Component --> */}
            <section class="p-3 p-md-4 p-xl-5">
                <div class="container">
                    <div class="card border-light-subtle shadow-sm1">
                        <div class="row g-0">
                            <div class="col-12 col-md-6">
                                <video src="" className='w-100' controls autoPlay style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    display: "block"
                                }}>
                                    <source src="https://v1.pinimg.com/videos/iht/720p/a5/c8/d5/a5c8d54a8d1622e578903a5b23f20fc3.mp4" type="video/mp4" />
                                </video>
                                {/* <img src="https://i.pinimg.com/564x/de/da/d3/dedad30639c6c4095af822c25e093e74.jpg" className='w-100 h-100' alt="" /> */}
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="card-body p-3 p-md-4 p-xl-5">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="mb-4">
                                                <h2 class="h3">Registration</h2>
                                                <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        isvalid ? <></> :
                                            <span className='text-danger'>
                                                {/* {error.fname} */}
                                                {/* {error.lname} */}
                                                {/* {error.email} */}
                                                {/* {error.password} */}
                                                { }
                                            </span>
                                    }
                                    <form action="#!" onSubmit={handleSubmit}>
                                        <div class="row gy-3 gy-md-4 overflow-hidden">

                                            {/* firstName */}

                                            <div class="col-12">
                                                <label for="firstName" class="form-label">First Name <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" onChange={(e) => setformData({ ...formData, fname: e.target.value })} />
                                                {
                                                    isvalid ? <></> :
                                                        <span className='text-danger'>
                                                            {error.fname}
                                                        </span>
                                                }
                                            </div>
                                            {/* last name  */}

                                            <div class="col-12">
                                                <label for="lastName" class="form-label">Last Name <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control" name="lastName" id="lastName" placeholder="Last Name" onChange={(e) => setformData({ ...formData, lname: e.target.value })} />
                                                {
                                                    isvalid ? <></> :
                                                        <span className='text-danger'>
                                                            {error.lname}
                                                            { }
                                                        </span>
                                                }
                                            </div>

                                            {/* email  */}

                                            <div class="col-12">
                                                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" onChange={(e) => setformData({ ...formData, email: e.target.value })} />
                                                {
                                                    isvalid ? <></> :
                                                        <span className='text-danger'>
                                                            {error.email}
                                                            { }
                                                        </span>
                                                }
                                            </div>

                                            {/* password */}

                                            <div class="col-12">
                                                <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                                                <input type="password" class="form-control" name="password" id="password" value={formData.password}
                                                    onChange={(e) => setformData({ ...formData, password: e.target.value })} />
                                                {
                                                    isvalid ? <></> :
                                                        <span className='text-danger'>
                                                            {error.password}
                                                            { }
                                                        </span>
                                                }
                                            </div>

                                            {/* <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                                    <label class="form-check-label text-secondary" for="iAgree">
                                                        I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                                                    </label>
                                                </div>
                                            </div> */}
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button class="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-12">
                                            <hr class="mt-5 mb-4 border-secondary-subtle" />
                                            <p class="m-0 text-secondary text-center">Already have an account?
                                                <Link to='/login' class="link-primary text-decoration-none"> Sign in</Link></p>
                                        </div>
                                    </div>
                                    {/* <div class="row">
                                        <div class="col-12">
                                            <p class="mt-5 mb-4">Or sign in with</p>
                                            <div class="d-flex gap-3 flex-column flex-xl-row">
                                                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                    </svg>
                                                    <span class="ms-2 fs-6">Google</span>
                                                </a>
                                                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg>
                                                    <span class="ms-2 fs-6">Facebook</span>
                                                </a>
                                                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                    </svg>
                                                    <span class="ms-2 fs-6">Twitter</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration