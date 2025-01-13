import React from "react";
import { data } from "../home/features";

const Section = ({  title, ticon,links }) => (
  <div className="col-4 col-lg-6 col-md-12 mb-5">
    <h4 className="fs-5">
    {ticon} <span className="ms-2">{title}</span>
    </h4>
    <div className="links">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="list-unstyled">
            <a href={link.href} className="lh-lg text-decoration-none">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-4 fw-light text-left text-muted">
          To create a ticket, select a relevant topic
        </h1>
        {data.map((section, index) => (
          <Section key={index} ticon={section.ticon} title={section.title} links={section.links} />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
