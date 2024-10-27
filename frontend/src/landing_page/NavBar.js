import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container-fluid bg-light">
      <div className="container-xxl">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className="logo" src="/media/images/logo.svg" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse top-0 end-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-text ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/product-page">
                    Products
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/support-page">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
