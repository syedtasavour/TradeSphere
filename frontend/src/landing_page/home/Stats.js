import React from "react";
import { statsData } from "./features";


function Stats() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="text-muted clr mb-4 fw-normal">Trust with confidence</h1>
          <div className="">
            {statsData.map((stat, index) => (
              <div key={index} className={`stat-${index}`}>
                <p className="h4 clr">{stat.title}</p>
                <p className="text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-6">
          <img
            src="/media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid w-100"
          />
          <div className="text-center space-between-links">
            <a href="#" className="fw-normal mr-5 text-decoration-none">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="fw-normal text-decoration-none">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
