import React from 'react';
import './host.css';

const Host = () => {
	return (
		<div>
			<div className="host-header">
				<h1>HOST</h1>
			</div>
			<p>
				Collect 500lbs of food<br />
				And we will pick it up and distribute!
			</p>
			<div className="form">
				<label>Host Information</label>
				<input placeholder="Name" />
				<input placeholder="Address" />
				<input placeholder="Contact Info" />
				<input placeholder="About" />
				<input placeholder="Upload Photo" />
			</div>
			<div className="form">
				<label>Event Information</label>
				<input placeholder="Name" />
				<input placeholder="Address" />
				<input placeholder="Contact Info" />
				<input placeholder="About" />
				<input placeholder="Upload Photo" />
			</div>
		</div>
	);
};

export default Host;
