import React from "react";
import "./style.css";

const TableConvertibles = (props) => {
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

const convertibles = [
  { title: "Convertibles", model: "F", price: "2000", year: "2009" },
  { model: "G", price: "6000", year: "2010" },
  { model: "H", price: "12500", year: "2012" },
  { model: "M", price: "50000", year: "2017" },
];

const Convertibles = (props) => {
  return (
    <div>
      {convertibles.map((convertible) => (
        <TableConvertibles
          key={convertible.model}
          title={convertible.title}
          year={convertible.year}
          model={convertible.model}
          price={convertible.price}
        />
      ))}
    </div>
  );
};

export default Convertibles;
