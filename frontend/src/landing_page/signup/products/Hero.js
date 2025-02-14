import React from "react";
import { company_icon, company_name } from "../home/features";
import { Link } from "react-router-dom";

function Hero() {
    return(
        <div className="container mt-5">
            <div className="row ">
               
                    <div className="text-center">
                        <h1 className="display-6 fw-bold">{company_name} Products</h1>
                        <p className="lead fw-bold">Sleek, modern, and intuitive trading platforms.</p>
                        <p>
                        Check out our
                        <Link to="/" className="text-decoration-none"> investment offerings {company_icon}</Link>
                        </p>
                 
                </div>
            </div>
        </div>
    );

}

export default Hero;