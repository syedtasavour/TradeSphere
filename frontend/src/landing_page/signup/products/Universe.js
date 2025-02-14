import React from "react";
import { company_name } from "../home/features";
import { ftrProducts } from "./data";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-4"> 
        <p className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/">{company_name}.blog</a>
        </p>
      </div>
      <div className="row text-center mb-4">
        <p className="fs-2 fw-bold">The {company_name} Universe</p>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms.
        </p>
      </div>

      <div className="row">
        {ftrProducts.map((product, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 text-center mb-3">
            <img
              src={product.img}
              className="img-fluid mb-2"
              style={{ maxWidth: "100px" }}
              alt={product.productDescription}
            />
            <p
              className="fs-small fs-8"
              style={{ maxWidth: "200px", margin: "0 auto" }} // Center text
            >
              {product.productDescription}
            </p>
          </div>
          
        ))}
        <div className="text-center
        ">
        <Link to="/signup">
        <button className="btn btn-primary fw-bolder px-4 py-2">
                        Sign Up for Free
                    </button></Link>
        </div>
        
      </div>
    </div>
  );
}

export default Universe;
