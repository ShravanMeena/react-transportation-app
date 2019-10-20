import React from "react";
import "./VehiclesFolder/style.css";

const Title = ({ title, subtitle }) => (
  <div>
    <h2 className="ChangeProp">{title}</h2>
    <h4>{subtitle}</h4>
  </div>
);

export default Title;
