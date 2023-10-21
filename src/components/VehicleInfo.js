import React from "react";
import { Convertibles, Trucks, Cars } from "./Vehicles";

const VehicleInfo = (props) => {
  const { showCars, showTrucks, showConvertibles } = props;
  return (
    <div>
      {showCars && <Cars />}
      {showTrucks && <Trucks />}
      {showConvertibles && <Convertibles />}
    </div>
  );
};

export default VehicleInfo;
