import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { userStore } from '../contexts/usercontext';

const MakeDonation = () => {
	const globalState = useContext(userStore);

	useEffect(() => {
		console.log(globalState.state);
	}, []);

	return (
		<div>
			<div className="donate-header">
				<h1 style={{ color: 'white', marginTop: '0px' }}>DONATE</h1>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ flex: 1 }}>
					<Link to="/scan-barcodes">Scan Barcode</Link>
				</div>
				<div style={{ flex: 1 }}>
					<Link to="/photo">Take Photo</Link>
				</div>
				<div style={{ flex: 1 }}>
					<Link>Add</Link>
				</div>
			</div>
			<div className="donation-form">
				<input className="host-input" type="text" placeholder="Product" />
				<input className="host-input" type="text" placeholder="Weight" />

				<input className="host-input" type="text" placeholder="Expiration Date" />
				<input className="host-input" type="text" placeholder="Notes" />
			</div>
			<ul>
				{globalState.state.items !== undefined ? (
					globalState.state.items.map((item) => {
						<li>{item.name}</li>;
					})
				) : null}
			</ul>
		</div>
	);
};

export default MakeDonation;
