import React from "react";
import "./Vehicles/style.css";

const Title = (props) => {
  const { subtitle, title } = props;
  return (
    <div>
      <h2 className="ChangeProp">{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default Title;
