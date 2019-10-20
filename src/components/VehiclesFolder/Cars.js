import React from "react";
import "./style.css";

const TableCars = ({ title, year, model, price }) => (
  <div>
    <h2 className="ChangeProp">{title}</h2>
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

const Cars = () => (
  <div>
    <TableCars title="Cars" year="2014" model="D" price="18000" />
    <TableCars year="2013" model="E" price="5200" />
    <TableCars year="2016" model="B" price="15500" />
  </div>
);

export default Cars;
