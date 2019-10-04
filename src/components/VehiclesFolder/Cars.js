import React from "react"
import "./style.css"

const TableCars = (props) => {
	return(
		<div>
			<h2 className="ChangeProp">{props.title}</h2>
				<table>
					  <tr>
					    <th>Year</th>
					    <th>Model</th>
					    <th>Price</th>
					    <th>Buy</th>
					  </tr>
					  <tr>
					    <td>{props.year}</td>
					    <td>{props.model}</td>
					    <td>${props.price}</td>
					    <td><button>Buy Now</button></td>
				  </tr>
				</table>			
		</div>		
		)
}

const Cars = (props) => {
	return(
			<div>
				<TableCars title="Cars" year="2014" model="D" price="18000"/>
				<TableCars year="2013" model="E" price="5200"/>
				<TableCars year="2016" model="B" price="15500"/>
			</div>
		)
}

export default Cars;