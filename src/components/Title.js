import React, { Fragment } from "react";
import "./VehiclesFolder/style.css";

const Title = ({ title, subtitle }) => (
  <Fragment>
    {title && <h2 className="ChangeProp">{title}</h2>}
    {subtitle && <h4>{subtitle}</h4>}
  </Fragment>
);

export default Title;
