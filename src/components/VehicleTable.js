import React from "react";
import Title from "./Title";

export default ({ title, subtitle, year, model, price }) => (
  <div>
    <Title title={title} subtitle={subtitle} />
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
