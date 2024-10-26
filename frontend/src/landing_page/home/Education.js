import React from "react";
import { features, right } from "./features";

function Education() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          {features.map((feature, index) => (
            <div key={index} className="mb-4">
              <img
                src={feature.imgSrc}
                alt={feature.text}
                className="img-fluid w-75"
              />
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-md-12">
          {right.map((feature, index) => (
            <div key={index} className="mt-5 text-center text-lg-start ">
              <h1 className="tb text-muted">{feature.head}</h1>
              <p>{feature.body}</p>
              <p>{feature.link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
