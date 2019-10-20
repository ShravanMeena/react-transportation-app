import React from "react";
import "./App.css";
import Title from "./components/Title";
import Options from "./components/Options";
import VehicleInfo from "./components/VehicleInfo";

const App = () => (
  <div>
    <Title
      title="Welcome to React Transportation"
      subtitle="The best place to buy vehicles online"
    />
    <Options option="Choose Options" />
    <VehicleInfo showCars={true} showTrucks={true} showConvertibles={true} />
  </div>
);

export default App;
