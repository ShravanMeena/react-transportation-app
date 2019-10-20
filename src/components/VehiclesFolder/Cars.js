import React from "react";
import "./style.css";
import VehicleTable from "../VehicleTable";

const Cars = () => (
  <div>
    <VehicleTable title="Cars" year="2014" model="D" price="18000" />
    <VehicleTable year="2013" model="E" price="5200" />
    <VehicleTable year="2016" model="B" price="15500" />
  </div>
);

export default Cars;
