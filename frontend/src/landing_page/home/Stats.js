import React from "react";
import { Link } from "react-router-dom";
import { statsData ,company_icon } from "./features";

function Stats() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="text-muted clr mb-4 fw-normal">Trust with confidence</h1>
          <div>
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
            <Link to="/products" className="fw-normal mr-5 text-decoration-none">
              Explore our products {company_icon}
            </Link>
            <Link to="/kite-demo" className="fw-normal text-decoration-none">
              Try Kite demo {company_icon}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
