import React from "react";
import { abt_hero_left } from "../home/features";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="p-5 col-lg-6 col-md-12 ">
          {abt_hero_left.map((user, index) => (
            <div key={user.id}>
              {user.body}
              {user.body1}
              {user.body2}
              {user.body3}
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-md-12 p-5">
        {abt_hero_left.map((user, index) => (
            <div key={user.id}>
              {user.body4}
              {user.body5}
              {user.body6}
             
            </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
