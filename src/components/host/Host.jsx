import React from 'react';
import './host.css';

const Host = () => {
	return (
		<div>
			<div className="host-header">
				<h1 style={{ color: 'white' }}>HOST</h1>
			</div>
			<h3 style={{ marginTop: '20px' }}>Collect 500lbs of food</h3>
			<h3>And we will pick it up and distribute!</h3>

			<div className="form">
				<label className="host-label">Host Information</label>
				<input className="host-input" placeholder="Name" />
				<input className="host-input" placeholder="Address" />
				<input className="host-input" placeholder="Contact Info" />
				<input className="host-input" placeholder="About" />
				<input className="host-input" placeholder="Upload Photo" />
			</div>
			<div className="form">
				<label className="host-label">Event Information</label>
				<input className="host-input" placeholder="Event Name" />
				<input className="host-input" placeholder="Address" />
				<input className="host-input" placeholder="Event Dates" />
				<input className="host-input" placeholder="Event Description" />
				<input className="host-input" placeholder="Upload Photo" />
			</div>
			<button className="event-submit">Create Event</button>
		</div>
	);
};

export default Host;
