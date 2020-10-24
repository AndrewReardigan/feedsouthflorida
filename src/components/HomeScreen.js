import React from 'react';

const HomeScreen = () => {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
				<div style={{ flex: 1, height: '100px' }}>Logo</div>
				<div style={{ flex: 1 }}>Profile Pic</div>
				<div style={{ flex: '1 100%' }}>Welcome</div>
				<div style={{ flex: '1' }}>Donate Food</div>
				<div style={{ flex: '1' }}>Host Event</div>
				<div style={{ flex: '1 100%' }}>Explore</div>
				<div style={{ flex: '1 100%' }}>Events in your Area</div>
				<div style={{ flex: '1 100%' }}>Hosts</div>
			</div>
		</div>
	);
};

export default HomeScreen;
