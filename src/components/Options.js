import React from 'react';
import './VehiclesFolder/style.css';

const Options = (props) => {
  return (
    <div>
      <h2 className='ChangeProp'>{props.option}</h2>
      <span>New Only</span><input type='checkbox' checked />
      <select>
        <option value='All'>All</option>
        <option value='Cars'>Cars</option>
        <option value='Trucks'>Trucks</option>
        <option value='Convertibles'>Convertibles</option>
      </select>
    </div>
  );
};

export default Options;