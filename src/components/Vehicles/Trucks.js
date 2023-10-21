import React from "react";
import "./style.css";

const TableTrucks = (props) => {
  const { title, year, model, price } = props;
  return (
    <div>
      <h2 className="ChangeProp">{title}</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{year}</td>
          <td>{model}</td>
          <td>${price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

const trucks = [
  { title: "Trucks", model: "D", price: "18000", year: "2014" },
  { model: "E", price: "5200", year: "2013" },
];

const Trucks = (props) => {
  return (
    <div>
      {trucks.map((truck) => (
        <TableTrucks
          key={truck.model}
          title={truck.title}
          year={truck.year}
          model={truck.model}
          price={truck.price}
        />
      ))}
    </div>
  );
};

export default Trucks;
