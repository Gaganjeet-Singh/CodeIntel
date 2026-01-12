import React, { useState } from "react";
import api from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import "./review.css";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      
      <ToastContainer position="top-center" />

      <div className="container">
        <div className="login-form-box">
          <div className="form-control login-heading">
            <h2 style={{ color: "#0b1220" }}>Register</h2>
          </div>

          <form onSubmit={HandleSubmit} className="login-form">
            <div className="form-control">
              <label style={{ color: "#0b1220" }}>Username</label>
              <input
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={HandleChange}
                required
              />
            </div>

            <div className="form-control">
              <label style={{ color: "#0b1220" }}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={HandleChange}
                required
              />
            </div>

            <div className="form-control">
              <label style={{ color: "#0b1220" }}>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={HandleChange}
                required
              />
            </div>

            <div className="form-control">
              <button type="submit" className={`login-btn ${loading ? "btn-disabled" : ""}`} disabled={loading}>
                {loading ? "Creating account..." : "Register"}
              </button>

              <p style={{ fontSize: "16px" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
