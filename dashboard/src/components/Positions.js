import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions ] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {
              allPositions.map((stock, index) => {
                const currVal = stock.price * stock.qty;
                const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                const profitClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                return (
                  <tr key={index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profitClass}>
                      {((currVal - stock.avg * stock.qty) / 100).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })
            }
        </table>
      </div>
    </>
  );
};

export default Positions;
