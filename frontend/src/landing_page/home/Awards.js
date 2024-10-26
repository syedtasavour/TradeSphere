import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest Stock Broker in India"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="text-center text-lg-start">Largest Stock Broker in India</h1>
          <p className="text-center text-lg-start">
            Over 2 million TradeSphere clients contribute to more than 15% of
            all retail order volumes in India daily by trading and investing
            in:
          </p>
          <div className="row">
            <div className="col-6 text-center text-md-start">
              <ul className="list-unstyled">
                <li>
                  <p>Equities</p>
                </li>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodities</p>
                </li>
              </ul>
            </div>
            <div className="col-6 text-center text-md-start">
              <ul className="list-unstyled">
                <li>
                  <p>Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds</p>
                </li>
                <li>
                  <p>Exchange-Traded Funds (ETFs)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
