import React from "react";
import Cars from "./VehiclesFolder/Cars";
import Trucks from "./VehiclesFolder/Trucks";
import Convertibles from "./VehiclesFolder/Convertibles";

const VehicleInfo = (props) => {
  return (
    <div>
      {props.showCars && <Cars />}
      {props.showTrucks && <Trucks />}
      {props.showConvertibles && <Convertibles />}
    </div>
  );
};

export default VehicleInfo;
