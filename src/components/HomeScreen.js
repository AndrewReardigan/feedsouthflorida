import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HomeScreen = () => {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
				<div style={{ flex: 1, height: '100px' }}>Logo</div>
				<div style={{ flex: 1 }}>Profile Pic</div>
				<div style={{ flex: '1 100%' }}>Welcome</div>

				<div style={{ flex: `1 25%` }} />
				<div style={{ flex: '1 50%' }}>
					<Link to="/make-donation">
						<button style={{ width: '100px', marginRight: '20px' }}>Donate</button>
					</Link>
					<Link to="/host-event">
						<button style={{ width: '100px' }}>Host Event</button>
					</Link>
				</div>
				<div style={{ flex: `1 25%` }} />
				<div style={{ flex: '1 100%' }}>Explore</div>
				<div style={{ flex: '1 100%' }}>Events in your Area</div>
				<div style={{ flex: '1 100%' }}>Hosts</div>
			</div>
		</div>
	);
};

export default HomeScreen;
