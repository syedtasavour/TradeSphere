import React from "react";
import { about_user, user_data } from "../home/features";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-lg-6 col-md-12  p-3 text-center">
          {about_user.map((user) => (
            <div key={user.id}>
              {user.img}
              {user.name}
              {user.Your_Position}
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-md-12  p-3 abt_pp">
          {user_data.map((user) => (
            <div key={user.id }>
              {user.abt}
              {user.abt2}
              {user.abt3}
              {user.abt4}
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
