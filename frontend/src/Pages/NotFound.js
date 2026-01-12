import React from "react";
import { Link } from "react-router-dom";
import "./review.css";

export default function NotFound() {
  return (
    <div className="container">
      <div className="login-form-box">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="login-btn">Go Home</Link>
      </div>
    </div>
  );
}
