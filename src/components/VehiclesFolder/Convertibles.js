import React from "react";
import "./style.css";

const TableConvertibles = ({ title, year, model, price }) => (
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

const Convertibles = () => (
  <div>
    <TableConvertibles
      title="Convertibles"
      year="2009"
      model="F"
      price="2000"
    />
    <TableConvertibles year="2010" model="G" price="6000" />
    <TableConvertibles year="2012" model="H" price="12500" />
    <TableConvertibles year="2017" model="M" price="50000" />
  </div>
);

export default Convertibles;
