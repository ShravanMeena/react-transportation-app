import React from 'react';
import Cars from './VehiclesFolder/Cars';
import Trucks from './VehiclesFolder/Trucks';
import Convertibles from './VehiclesFolder/Convertibles';

const VehicleInfo = (props) => {
  return (
    <div>
      {props.showCars ? 
        <Cars />
        : null
      }
      {props.showTrucks ? 
        <Trucks />
        : null
      }
      {props.showConvertibles ? 
      <Convertibles />
      : null
      }
    </div>
  );
};

export default VehicleInfo;