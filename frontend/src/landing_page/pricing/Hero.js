import React from "react";
import { pricing } from "../home/features";

function Hero() {
  return (
    <div className="row d-flex justify-content-evenly">
      <div className="col-10 ">
        <h1 className=" text-center fs-3 mt-5 ">Unbeatable Pricing</h1>
        <p className="text-center fs-4 mb-5 text-muted">
          {" "}
          List of all charges and taxes
        </p>
      </div>

      {pricing.map((pricing, index) => (
        <div className="col-lg-4 col-12 p-3 mt-5  text-center" key={index}>
          <img src={pricing.imgSrc} alt="" />
          <h3>{pricing.text }</h3>
          <p className="text-muted">{pricing.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Hero;
