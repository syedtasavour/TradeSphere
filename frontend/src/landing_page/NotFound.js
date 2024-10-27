import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link text-decoration-none">Go back to Home</Link>
    </div>
  );
}

export default NotFound;