import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;   // 🔥 prevents flicker

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <p>CodeIntel AI</p>
      </div>

      <div className="nav-links">
        {user ? (
          <>
            <Link to="/me">Profile</Link>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <button className="nav-btn" onClick={handleRegister}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
