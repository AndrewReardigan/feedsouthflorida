import React from 'react';
import './madeit.css';

const MadeIt = () => {
	return (
		<div className="container">
			<h1>YOU MADE IT!</h1>
			<div className="total-weight">
				<h3>YOUR TOTAL WEIGHT IS</h3>
				<input placeholder="532 lbs" value="something" />
			</div>

			<button className="map">GENERATE MAP</button>

			<button className="sendto">SEND TO FEEDING SOUTH FLORIDA</button>
		</div>
	);
};

export default MadeIt;
