import React from "react";
import "./style.css";
import VehicleTable from "../VehicleTable";

const Trucks = () => (
  <div>
    <VehicleTable title="Trucks" year="2014" model="D" price="18000" />
    <VehicleTable year="2013" model="E" price="5200" />
  </div>
);

export default Trucks;
