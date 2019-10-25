import React, { useState } from "react"
import { Form } from 'react-bootstrap'
import Table from '../Table/Table';

const Options = (props) => {
	const [category, setCategory] = useState(
		'All'
	  );
	const handleChange = event => setCategory(event.target.value);
	
	return(
		<div className="container">
			<div className="row">
			<div className='col-6'>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>{props.option}</Form.Label>
					<Form.Control as="select" value={category} onChange={handleChange}>
						<option>All</option>
						<option>Sedan</option>
						<option>SUV</option>
						<option>Truck</option>
					</Form.Control>
				</Form.Group>
			</div>
			<div className="col-3 pt-4">
				<Form.Group controlId="formBasicCheckbox">
    				<Form.Check type="checkbox" label="New Only" />
  				</Form.Group>
			 </div>
			 </div>
			 <Table
			   selectedCategory={category}
			 />
			
		</div>

		)
};

export default Options;