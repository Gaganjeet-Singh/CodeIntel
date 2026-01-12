import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./review.css";

function Login() {
  const [click, setClick] = useState(false);
  const { login } = useAuth();

  const [formData, setformData] = useState({
    username: "",
    password: ""
  });

  const HandleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setClick(true);

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      await login(res.data.token);   // 🔥 auth + redirect
    } catch (e) {
      toast.error(e.response?.data?.message || "Login failed");
    }

    setClick(false);
  };

  return (
    <>
      

      <div className="container">
        <div className="login-form-box">
          <div className="form-control login-heading">
            <h2 style={{ color: "#0b1220" }}>Login</h2>
          </div>

          <form onSubmit={HandleSubmit} className="login-form">
            <div className="form-control">
              <label style={{ color: "#0b1220" }}>Username :</label>
              <input
                name="username"
                placeholder="enter username"
                value={formData.username}
                onChange={HandleChange}
              />
            </div>

            <div className="form-control">
              <label style={{ color: "#0b1220" }}>Password :</label>
              <input
                type="password"
                name="password"
                placeholder="enter password"
                value={formData.password}
                onChange={HandleChange}
              />
            </div>

            <div className="form-control">
              <button
                type="submit"
                className={`login-btn ${click ? "btn-disabled" : ""}`}
                disabled={click}
              >
                {click ? "Logging in..." : "Login"}
              </button>

              <p style={{ fontSize: "16px" }}>
                Don’t have an account?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
