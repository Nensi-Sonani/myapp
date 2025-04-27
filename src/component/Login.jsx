import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
    let [user , setuser] =useState({});
    let navigate = useNavigate();

    useEffect(()=>{
        let userdata = JSON.parse(localStorage.getItem('user'));
        if(userdata != null)
        {
            window.location="/";
        }
    })

    let getinputvalue=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setuser({...user , [name] : value});
    }

    let submitdata=(e)=>{
        e.preventDefault();

        axios.post("http://localhost/react_auth_backend/login.php", user)
        .then((res)=>{
            console.log(res);
            if(res.data.length==1)
            {
                toast.success('Login Successfully')
                localStorage.setItem('user' , JSON.stringify(res.data[0]));
                window.location='/';
                // navigate("/blog");
            }
            else{
                toast.error('Invalid Email or Password')
            }
            
        })
        .catch((err)=>{
            toast.error('Invalid Email or Password')
        })
    }

    return(
        <div className="loginpage">
            <Container>
                <Row>
                    <div className="box">
                        <Col sm={6}>
                            <img src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg " width="100%"/>
                        </Col>
                        <Col sm={6}>
                        <div className="formdata1">
                            <h1 style={{ marginTop:"50px"}}>Login</h1>
                            <form method="post" onSubmit={(e)=>submitdata(e)}>
                                <table align="center">
                                    <tr>
                                        <td>Enter Email : </td>
                                        <td><input type="text" name="email" placeholder="Enter Your Email..." value={user.email?user.email:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                                    <tr>
                                        <td>Enter Password : </td>
                                        <td><input type="password" name="password" placeholder="Enter Your Password..." value={user.password?user.password:""}  onChange={(e)=>getinputvalue(e)}/></td>
                                    </tr><br/>
                                </table>
                                {/* <button className="onbtn" > <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Login</Link></button> */}
                                    <input type="submit" name="submit" value="Login" className="btn1"/>
                            </form>
                        </div>
                        </Col>  
                    </div>
                </Row>
            </Container>
            
            <ToastContainer />
        </div>
    )
}

export default Login     