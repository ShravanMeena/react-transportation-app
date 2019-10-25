import React, {useState} from 'react';
import "../Table/Table.css";

const Table = (props) => {
  const vehicles = [
    {
      id: 1,
      Category: 'Truck',
      Model: 'D',
      Year: "2014",
      Condition : 'Used',
      Price: 16000
    },
    {
      id: 2,
      Category: 'Truck',
      Model: 'E',
      Year: "2013",
      Condition : 'Used',
      Price: 1500
    },
    {
      id: 3,
      Category: 'Sedan',
      Model: 'A',
      Year: "2016",
      Condition : 'Used',
      Price: 11000
    } ,
    {
      id: 4,
      Category: 'Sedan',
      Model: 'C',
      Year: "2012",
      Condition : 'Used',
      Price: 2000
    },
    {
      id: 5,
      Category: 'SUV',
      Model: 'X',
      Year: "2013",
      Condition : 'Used',
      Price: 9000
    }
    ,
    {
      id: 6,
      Category: 'SUV',
      Model: 'F',
      Year: "2020",
      Condition : 'New',
      Price: 25000
    }
  ]

  const vehiclesList = vehicles.map((vehicles, index) => 
    <tr key={vehicles.id} 
        className={props.selectedCondition && vehicles.Condition === 'Used' ? 'hideRow' : props.selectedCategory === 'All' ? 'showRow' : props.selectedCategory !== vehicles.Category ? 'hideRow' : 'showRow' }>
      <th scope="row">{index}</th>
      <td>{vehicles.Category}</td>
      <td>{vehicles.Model}</td>
      <td>{vehicles.Year}</td>
      <td>{vehicles.Condition}</td>
      <td>{vehicles.Price}</td>
  </tr>
  );

  return (
    <div>
     <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID#</th>
      <th scope="col">Category</th>
      <th scope="col">Model</th>
      <th scope="col">Year</th>
      <th scopt="col">Conditon</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
      {vehiclesList}
    </tbody>
  </table>
    </div>
  );
};

export default Table;