import React, { Fragment } from "react";
import Cars from "./VehiclesFolder/Cars";
import Trucks from "./VehiclesFolder/Trucks";
import Convertibles from "./VehiclesFolder/Convertibles";

const VehicleInfo = ({ showCars, showTrucks, showConvertibles }) => (
  <Fragment>
    {showCars && <Cars />}
    {showTrucks && <Trucks />}
    {showConvertibles && <Convertibles />}
  </Fragment>
);

export default VehicleInfo;
