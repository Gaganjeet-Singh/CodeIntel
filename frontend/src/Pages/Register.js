import React, { useState } from "react";
import api from "../utils/api";
import {ToastContainer,toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [loading,setloading] = useState(false);

    const [formData,setformData] = useState({
        username : "",
        email : "",
        password : "",
    });

    const HandleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const HandleSubmit = async(e) => {
        setloading(true);
        e.preventDefault();
        try {
            const res = await api.post("/auth/register",
            formData
            )
            toast.success(res.data.message);
            navigate("/login");
        }catch(err) {
            toast.error(err.response?.data?.message || "something went wrong");
        } finally {
            setloading(false);
            setformData({
                username : "",
                password : "",
                email : ""
            })
        }
        
    }
    return (
        <>
            <div>
                <ToastContainer position="top-center"/>
                <h2>Register</h2>
                <form onSubmit={HandleSubmit}>
                    <div style = {{display : "flex",flexDirection:"column"}}>
                        <label htmlFor="username" >Username : </label>
                        <input  name = "username" type ="text"  style = {{width:"25%"}} value = {formData.username} onChange={HandleChange}/>
                    </div>
                    <div style = {{display : "flex",flexDirection:"column"}}>
                        <label htmlFor="email" >Email : </label>
                        <input  name = "email" type ="email"  style = {{width:"25%"}} value = {formData.email}  onChange={HandleChange}/>
                    </div>
                    <div style = {{display : "flex",flexDirection:"column"}}>
                        <label htmlFor="password" >Password : </label>
                        <input  name = "password" type ="password"  style = {{width:"25%"}} value = {formData.password}  onChange={HandleChange}/>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                cursor: loading ? "not-allowed" : "pointer",
                                opacity: loading ? 0.7 : 1,
                            }}
                            >
                            {loading ? "Registering..." : "Register"}
                            </button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Register;