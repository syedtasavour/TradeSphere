import React from "react";
import {
  ftr_info,
  social_bottom,
  social_top,
  ftr_info2,
  ftr_links,
  company_name
} from "./home/features";

function Footer() {
  return (
    <div className="container-fluid mt-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 mt-4 text-center">
            <img
              src="media/images/logo.svg"
              alt=""
              className="img-fluid mb-3"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p className="text-muted">
              © 2010 - 2024, {company_name} Broking Ltd. All rights reserved.
            </p>
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

          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
            <h5 className="tb">Company</h5>
            <ul className="ftr-info list-unstyled">
              {ftr_info.map((fts, index) => (
                <li key={index} className="text-muted cs">
                  {fts.ft}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
            <h5 className="tb">Support</h5>
            <ul className="ftr-info list-unstyled">
              {ftr_info.map((fts, index) => (
                <li key={index} className="text-muted cs">
                  {fts.ft}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
            <h5 className="tb">Account</h5>
            <ul className="ftr-info list-unstyled">
              {ftr_info.map((fts, index) => (
                <li key={index} className="text-muted cs">
                  {fts.ft}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            {ftr_info2.map((ftr, index) => (
              <div key={index} className="text-muted ftr2">
                {ftr.text}
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center justify-content-sm-end align-items-center ftr2">
            {ftr_links.map((ftr, index) => (
              <div key={index} className="me-3">
                <span>{ftr.ft}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
