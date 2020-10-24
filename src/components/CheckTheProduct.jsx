import React from 'react';
import axios from 'axios';

const CheckTheProduct = () => {
	const data = axios
		.get(
			'https://api.edamam.com/api/food-database/v2/parser?upc=190298000254&app_id=58aee40e&app_key=c669624a047dd44b349464cab662c714'
		)
		.then((response) => {
			console.log(response.data);
		});

	return (
		<div>
			<h1>{console.log(data)}</h1>
			{}
		</div>
	);
};

export default CheckTheProduct;
