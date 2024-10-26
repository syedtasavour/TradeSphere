import React from "react";

function NavBar() {
  return (
    <div className="container-fluid bg-light">
      <div className="container-xxl">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo"
              src="/media/images/logo.svg"
              alt="logo"
              
            />
          </a>
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
            <ul className="navbar-nav nav-text  ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-muted"
                  aria-current="page"
                  href="#"
                >
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Products
                </a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Pricing
                </a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Support
                </a>
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
