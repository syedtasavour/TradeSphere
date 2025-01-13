import React from "react";
import { chargesData } from "../home/features";
const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const descriptionStyle = {
    fontSize: '0.6rem',
    marginBottom: '4px',
  };

  const cardStyle = {
    border: '1px solid #dee2e6',
    borderRadius: '0.25rem',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    transition: 'box-shadow 0.3s ease',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '12px',
  };

  const listItemStyle = {
    fontSize: '0.6rem',
    border: 'none',
    padding: '2px 0',
    backgroundColor: 'transparent',
  };

function Brokerage() {
  return (
    <div className="container">
      <div className="container my-5">
        <h2 className="text-center mb-4">
          Brokerage Charges - Currency & Commodity
        </h2>

        <h3 className="mb-3">Currency</h3>
        <div className="table-responsive">
          <table
            className="table table-bordered table-hover text-center"
            aria-label="Currency Brokerage Charges"
          >
            <thead className="table-dark">
              <tr>
                <th>Category</th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Brokerage</th>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <th scope="row">STT/CTT</th>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <th scope="row">Transaction Charges</th>
                <td>
                  NSE: Exchange txn charge: 0.00035%
                  <br />
                  BSE: Exchange txn charge: 0.00045%
                </td>
                <td>
                  NSE: Exchange txn charge: 0.0311%
                  <br />
                  BSE: Exchange txn charge: 0.001%
                </td>
              </tr>
              <tr>
                <th scope="row">GST</th>
                <td colSpan="2">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <th scope="row">SEBI Charges</th>
                <td colSpan="2">₹10 / crore</td>
              </tr>
              <tr>
                <th scope="row">Stamp Charges</th>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3">Commodity</h3>
        <div className="table-responsive">
          <table
            className="table table-bordered table-hover text-center"
            aria-label="Commodity Brokerage Charges"
          >
            <thead className="table-dark">
              <tr>
                <th>Category</th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Brokerage</th>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <th scope="row">STT/CTT</th>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <th scope="row">Transaction Charges</th>
                <td>
                  Group A: Exchange txn charge: 0.0021%
                  <br />
                  Group B: Exchange txn charge:
                  <br />
                  CASTORSEED - 0.0005%
                  <br />
                  KAPAS - 0.0026%
                  <br />
                  PEPPER - 0.00005%
                  <br />
                  RBDPMOLEIN - 0.001%
                </td>
                <td>Exchange txn charge: 0.0418%</td>
              </tr>
              <tr>
                <th scope="row">GST</th>
                <td colSpan="2">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <th scope="row">SEBI Charges</th>
                <td>
                  Agri: ₹1 / crore
                  <br />
                  Non-agri: ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <th scope="row">Stamp Charges</th>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
      <div style={containerStyle} className="container mt-4">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Charges Explained</h2>
      <div className="row">
        {chargesData.map((charge, index) => (
          <div className="col-md-6" key={index}>
            <div style={cardStyle}>
              <h5 style={titleStyle}>{charge.title}</h5>
              <p style={descriptionStyle}>{charge.description}</p>
              {charge.details && (
                <ul style={{ paddingLeft: '10px' }}>
                  {charge.details.map((detail, idx) => (
                    <li key={idx} style={listItemStyle}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

   

      <div className="custom-table">
        <h1 className="fs-3">Charges for account opening</h1>

        <table className="table">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
          <tr>
            <td>Online account </td>
            <td>free</td>
          </tr>
          <tr className="bg-light">
            <td>Offline account </td>
            <td>free</td>
          </tr>
          <tr>
            <td>NRI account (offline only) </td>
            <td>500</td>
          </tr>
          <tr className="bg-light">
            <td>Partnership, LLP,or Corporate accounts (offline only) </td>
            <td>₹500</td>
          </tr>
        </table>

        <h1 className="fs-3  mt-5">Charges for account opening</h1>

        <table className="table">
          <tr>
            <th>Service</th>
            <th>Billing Frquency</th>
            <th>Charges</th>
          </tr>
          <tr>
            <td>Tickertape </td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr className="bg-light">
            <td>Smallcase </td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect </td>
            <td>Monthly</td>
            <td>Connect: 2000 | Historical: 2000</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
