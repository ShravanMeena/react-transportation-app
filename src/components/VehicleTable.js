import React from "react";

export default ({ title, year, model, price }) => (
  <div>
    {title && <h2 className="ChangeProp">{title}</h2>}
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{year}</td>
          <td>{model}</td>
          <td>${price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
