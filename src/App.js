import React from "react";
import "./App.css";
import { Title, Options, VehicleInfo } from "./components/index";

function App(props) {
  return (
    <div>
      <Title
        title="Welcome to React Transportation"
        subtitle="The best place to buy vehicles online"
      />
      <Options option="Choose Options" />
      <VehicleInfo showCars showTrucks showConvertibles />
    </div>
  );
}

export default App;
