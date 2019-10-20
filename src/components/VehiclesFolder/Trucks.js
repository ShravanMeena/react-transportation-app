import React from "react";
import "./style.css";

const TableTrucks = ({ title, year, model, price }) => (
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

const Trucks = () => (
  <div>
    <TableTrucks title="Trucks" year="2014" model="D" price="18000" />
    <TableTrucks year="2013" model="E" price="5200" />
  </div>
);

export default Trucks;
