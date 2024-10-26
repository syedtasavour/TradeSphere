import React from "react";
import {featuresImg} from "./features";


function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="text-muted">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="fw-bold text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <div className="row">
            {featuresImg.map((feature, index) => (
              <div className="col-4" key={index}>
                <div className="box d-flex align-items-center">
                  <img
                    src={feature.imgSrc}
                    alt={feature.text}
                    className="me-2 w-100"
                  />
                  <div className="pb">
                    <p className="pb position-relative text-muted">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
