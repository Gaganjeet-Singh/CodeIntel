import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import api from '../utils/api';
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import './review.css';
function Login() {


    const [formData,setformData] = useState({
        username : "",
        password : ""
    });

    const {login} = useAuth();

    const HandleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const HandleSubmit=  async(e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login",
                formData
            )
            toast.success(res.data.message);
            console.log("LOGIN RESPONSE:", res.data); // 👈 ADD THIS
            console.log("TOKEN:", res.data.token);  
            login(res.data.token);

        } catch(e) {
            toast.error(e.response?.data?.message || "something went wrong")
        } finally {
            setformData({
                username : "",
                password : ""
            })
        }
        
    }
    return (
        <>
            <Navbar/>
            <ToastContainer position="top-center"/>
            <div className="container">
                <div className = 'login-form-box'>
                    <div className = 'form-control login-heading'>
                        <h2 style = {{color : "#0b1220" }}>Login</h2>
                    </div>
                    <form onSubmit={HandleSubmit} className="login-form">
                        <div className = 'form-control'>
                            <label htmlFor="useranme" style = {{color : "#0b1220" }}>Username : </label>
                            <input name = "username" placeholder="enter username" value = {formData.username} onChange={HandleChange}/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" style = {{color : "#0b1220" }}>Password : </label>
                            <input name = "password" placeholder ="enter password" value = {formData.password} onChange={HandleChange}/>
                        </div>
                        <div className="form-control">
                            <button type = "submit" className="login-btn">Login</button>
                            <p style={{fontSize : "16px"}}>Don’t have an account? <Link to = '/register' style={{textDecoration: "none"}}>Register</Link></p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;