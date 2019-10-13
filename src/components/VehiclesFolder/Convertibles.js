import React from 'react';
import './style.css';

const TableConvertibles = (props) => {
  return (
    <div>
      <h2 className='ChangeProp'>{props.title}</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>${props.price}</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </div>
  );
};

const Convertibles = (props) => {
  return (
    <div>
      <TableConvertibles title='Convertibles' year='2009' model='F' price='2000' />
      <TableConvertibles year='2010' model='G' price='6000' />
      <TableConvertibles year='2012' model='H' price='12500' />
      <TableConvertibles year='2017' model='M' price='50000' />
    </div>
  );
};

export default Convertibles;