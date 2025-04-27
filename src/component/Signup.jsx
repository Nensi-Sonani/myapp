import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    let [user, setuser] = useState({});
    let navigate = useNavigate();
  
    useEffect(() => {
      let userdata = JSON.parse(localStorage.getItem("user"));
      if (userdata != null) {
        window.location = "/";
      }
    }, []);
  
    let getinputvalue = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setuser({ ...user, [name]: value });
    };
  
    let submitdata = (e) => {
      e.preventDefault();
      console.log("User Input:", user);
    
      if (!user.username || !user.email || !user.password || !user.cpass) {
        console.log("Toast should show: All fields are required");
        toast.error("All fields are required");
        return;
      }
    
      if (user.password !== user.cpass) {
        console.log("Toast should show: Passwords do not match");
        toast.error("Password & Confirm Password do not match");
        return;
      }
    
      axios
        .post("http://localhost/react_auth_backend/register.php", user, {
          headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
          console.log("Full Response from PHP:", res);
    
          // Check if response is valid JSON and contains message
          if (res.data && typeof res.data === "object" && res.data.message) {
            console.log("Toast should show:", res.data.message);
            toast.success(res.data.message, { autoClose: 3000 });
    
            setTimeout(() => {
              console.log("Redirecting to /login...");
              setuser({});
              window.location.href = "/login"; // Force redirect
            }, 3000);
          } else {
            console.log("Toast should show: Invalid response format");
            toast.error("Unexpected response from server.");
          }
        })
        .catch((err) => {
          console.log("Toast should show: Registration failed");
          console.log("Error:", err);
          toast.error("Registration failed. Please try again.");
        });
    };
    
    
    
    return (
      <div className="registerpage">
        <div className="formdata">
          <h1>Register</h1>
          <form method="post" onSubmit={submitdata}>
            <table>
              <tbody>
                <tr>
                  <td>Enter Username: </td>
                  <td>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Your Name..."
                      value={user.username || ""}
                      onChange={getinputvalue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enter Email: </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Your Email..."
                      value={user.email || ""}
                      onChange={getinputvalue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enter Password: </td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password..."
                      value={user.password || ""}
                      onChange={getinputvalue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enter Confirm Password: </td>
                  <td>
                    <input
                      type="password"
                      name="cpass"
                      placeholder="Enter Your Confirm Password..."
                      value={user.cpass || ""}
                      onChange={getinputvalue}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" name="submit" value="Register" className="btn1" />
          </form>
          <br />
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }

export default Signup