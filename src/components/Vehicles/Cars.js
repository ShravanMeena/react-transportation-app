import React from "react";
import "./style.css";

const TableCars = (props) => {
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

const cars = [
  { title: "Cars", model: "D", price: "18000", year: "2014" },
  { model: "E", price: "5200", year: "2013" },
  { model: "B", price: "15500", year: "2016" },
];

const Cars = (props) => {
  return (
    <div>
      {cars.map((car) => (
        <TableCars
          key={car.model}
          title={car.title}
          year={car.year}
          model={car.model}
          price={car.price}
        />
      ))}
    </div>
  );
};

export default Cars;
