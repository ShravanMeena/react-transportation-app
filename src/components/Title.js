import React from "react"
import"./VehiclesFolder/style.css"

const Tilte = (props) => {
	return(
			<div>
				<h2 className="ChangeProp">{props.title}</h2>
				<h4>{props.subtitle}</h4>
			</div>

		)
};

export default Tilte;