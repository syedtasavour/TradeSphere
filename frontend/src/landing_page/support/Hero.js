import React from "react";

function Hero() {
  return (
    <section className="container-fluid shc">
      <div className="p-5 pb-0" id="supportWrpper">
        <h1 className="fs-5">Support Portal</h1>
        <a href="#" className="text-decoration-none  shc font">
          Track Tickets
        </a>
      </div>

      <div className="row p-5 supportHeroA">
        <div className="col-6 col-lg-6 col-md-12">
            <h1 className="fs-4 mb-3">Search for an answer or browse help topics to create a ticket</h1>
            <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected " /> <br />
            <a href="" >Track account opening</a> 
            <a href="" >Track segment activation</a> 
            <a href="" >Intraday margins </a>
            <a href="" >Kite user manual</a>
        </div>
        <div className="col-6 col-lg-6 col-md-12 mb-4">
            <h1>Featured</h1>
            <ol>
                <li><a href="#">Offer for sale (OFS) - January 2025</a></li>
                <li><a href="#">Surveillance measure on scrips - January 2025</a></li>
            </ol>
        </div>
      </div>


    </section>
  );
}

export default Hero;

