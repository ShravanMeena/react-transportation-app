import React from "react";
import "./style.css";
import VehicleTable from "../VehicleTable";

const Convertibles = () => (
  <div>
    <VehicleTable title="Convertibles" year="2009" model="F" price="2000" />
    <VehicleTable year="2010" model="G" price="6000" />
    <VehicleTable year="2012" model="H" price="12500" />
    <VehicleTable year="2017" model="M" price="50000" />
  </div>
);

export default Convertibles;
