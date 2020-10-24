import React from 'react';
import axios from 'axios';

const CheckTheProduct = () => {
	const apiCall = () => {
		axios.get('https://api.upcitemdb.com/prod/trial/lookup?upc=051000164612').then((response) => {
			console.log(response.data);
		});
	};

	return (
		<div>
			<h1>{apiCall}</h1>
		</div>
	);
};

export default CheckTheProduct;
