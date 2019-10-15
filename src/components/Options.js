import React from "react"
import { Form, Dropdown, DropdownButton } from 'react-bootstrap'
import"./VehiclesFolder/style.css"

const Options = (props) => {
	return(
			<div>
				<h2 className="ChangeProp">{props.option}</h2>
				<Form.Group controlId="formBasicCheckbox">
    				<Form.Check type="checkbox" label="New Only" />
  				</Form.Group>
        <DropdownButton id="dropdown-basic-button" title="Filters">
          <Dropdown.Item href="#/action-1">All</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Cars</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Trucks</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Convertibles</Dropdown.Item>
        </DropdownButton>
			</div>

		)
};

export default Options;