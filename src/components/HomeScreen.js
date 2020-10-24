import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Event } from '../assets/home/Event.svg';
import { ReactComponent as Donate } from '../assets/home/donate.svg';

const HomeScreen = () => {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
				<div style={{ flex: 1, height: '100px' }}>Logo</div>
				<div style={{ flex: 1 }}>Profile Pic</div>
				<div style={{ flex: '1 100%' }}>
					<h1 className="welcome">Welcome USERNAME!</h1>
					<h3>Thank you for signing up!</h3>
				</div>

				<div style={{ flex: `1 10%` }} />
				<div style={{ flex: '1 80%' }}>
					<Link to="/make-donation">
						<button style={{ width: '45%', marginRight: '20px' }}>
							<Donate />
							<h3>
								DONATE<br />FOOD
							</h3>
						</button>
					</Link>
					<Link to="/host-event">
						<button style={{ width: '45%' }}>
							<Event />
							<h3>
								HOST<br />EVENT
							</h3>
						</button>
					</Link>
				</div>

				<div style={{ flex: `1 10%` }} />
				<div style={{ flex: '1 100%' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>
					<h1 className="explore">Explore</h1>
					<h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>
						one time events in<br />your area
					</h1>
				</div>

				<div style={{ flex: '1 100%' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>Events in your Area</div>
				<div style={{ flex: '1 100%' }}>Hosts</div>
			</div>
		</div>
	);
};

export default HomeScreen;
