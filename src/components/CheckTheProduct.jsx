import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckTheProduct = (props) => {
	const [ upcData, setUpcData ] = useState(null);
	const { barCode } = props;
	const getUpcData = async (upc) => {
		const callOptions = { headers: { 'Access-Control-Allow-Origin': 'https://www.upcitemdb.com' } };
		const apiCall = await axios.get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`, callOptions);
		setUpcData(apiCall.data);
	};
	// const apiCall = axios.get('https://api.upcitemdb.com/prod/trial/lookup?upc=051000164612').then((response) => {
	// 	console.log(response.data);
	// });
	useEffect(
		() => {
			// getUpcData('051000164612');
			if (barCode !== null) {
				getUpcData(barCode);
				console.log(upcData);
			}
		},
		[ barCode ]
	);
	return (
		<div>
			<div className="donate-scan" />
			<h1> {upcData !== null ? upcData.items[0].title : null}</h1>
			<h3>{upcData !== null ? upcData.items[0].weight : null}</h3>
		</div>
	);
};

export default CheckTheProduct;
