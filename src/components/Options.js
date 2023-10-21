import React from "react";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import "./Vehicles/style.css";

const vehicleTypes = [
  { label: "All", href: "#/action-1" },
  { label: "Cars", href: "#/action-1" },
  { label: "Trucks", href: "#/action-2" },
  { label: "Convertibles", href: "#/action-3" },
];
const Options = (props) => {
  const { option } = props;
  return (
    <div>
      <h2 className="ChangeProp">{option}</h2>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="New Only" />
      </Form.Group>
      <DropdownButton id="dropdown-basic-button" title="Filters">
        {vehicleTypes.map((item) => (
          <Dropdown.Item key={item.label} href={item.href}>
            {item.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Options;
