import React, { useState } from "react"
import { Form } from 'react-bootstrap'
import Table from '../Table/Table';

const Options = (props) => {
	const [category, setCategory] = useState(
		'All'
	  );
	const [condition, setCondition] = useState(
		false
	);
	const handleSelect = event => setCategory(event.target.value);
	const handleCheck = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		setCondition(value);
	}
	return(
		<div className="container">
			<div className="row">
			<div className='col-6'>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>{props.option}</Form.Label>
					<Form.Control as="select" value={category} onChange={handleSelect}>
						<option>All</option>
						<option>Sedan</option>
						<option>SUV</option>
						<option>Truck</option>
					</Form.Control>
				</Form.Group>
			</div>
			<div className="col-3 pt-4">
				<Form.Group controlId="formBasicCheckbox">
    				<Form.Check aria-label="Is New" type="checkbox" label="New Only" value={condition} onChange={handleCheck} />
  				</Form.Group>
			 </div>
			 </div>
			 <Table
			   selectedCategory={category}
			   selectedCondition={condition}
			 />
			
		</div>

		)
};

export default Options;