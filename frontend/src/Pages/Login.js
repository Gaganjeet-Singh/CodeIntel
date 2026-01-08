import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import api from '../utils/api';
import { useAuth } from "../context/AuthContext";
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
            <ToastContainer position="top-center"/>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="useranme">Username : </label><br/>
                <input name = "username" placeholder="enter username" value = {formData.username} onChange={HandleChange}/><br/>
                <label htmlFor="password">Password : </label><br/>
                <input name = "password" placeholder ="enter password" value = {formData.password} onChange={HandleChange}/><br/>
                <button type = "submit">Login</button>

            </form>
        </>
    )
}

export default Login;