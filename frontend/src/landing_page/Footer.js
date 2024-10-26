import React from "react";
import {
  ftr_info,
  social_bottom,
  social_top,
  ftr_info2,
  ftr_links,
} from "./home/features";

function Footer() {
  return (
    <div className="container-fluid mt-5  bg-light ">
      <div className="container">
        <div className="row ">
          <div className="col-3 mt-4 ">
            <div className="text-center">
              <img
                src="media/images/logo.svg"
                alt=""
                style={{ width: "15rem" }}
              />
            </div>
            <div className="text-center">
              <p className="text-start mm-l">
                © 2010 - 2024, TradeSphere Broking Ltd. All rights reserved.
              </p>
            </div>
            <div className="social-links text-muted">
              {social_top.map((social, index) => (
                <div key={index}>{social.link}</div>
              ))}
            </div>
            <hr />
            <div className="social-links text-muted">
              {social_bottom.map((social, index) => (
                <div key={index}>{social.link}</div>
              ))}
            </div>
          </div>

          <div className="col-3 mt-4">
            <div className="text-start tb">
              <h1 className=" tb ">Company</h1>
              <ul className="ftr-info">
                {ftr_info.map((fts, index) => (
                  <li key={index} className="text-muted cs ">
                    {fts.ft}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-3 mt-4">
            <div className="text-start">
              <h1 className=" tb">Support</h1>
              <ul className="ftr-info">
                {ftr_info.map((fts, index) => (
                  <li key={index} className="text-muted cs ">
                    {fts.ft}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-3 mt-4">
            <div className="text-start">
              <h1 className=" tb">Account</h1>
              <ul className="ftr-info">
                {ftr_info.map((fts, index) => (
                  <li key={index} className="text-muted cs ">
                    {fts.ft}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {ftr_info2.map((ftr, index) => (
              <div key={index} className="text-muted  ftr2 ">
                {ftr.text}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center  ftr2">
            {ftr_links.map((ftr, index) => (
              <div key={index} className="">
                <span className="me-3">{ftr.ft}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
