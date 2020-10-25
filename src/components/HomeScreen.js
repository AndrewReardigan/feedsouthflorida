import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Event } from '../assets/home/Event.svg';
import { ReactComponent as Donate } from '../assets/home/donate.svg';
import logo from '../assets/home/logo.png';
import veggies from '../assets/home/veggies.png';
import profilePic from '../assets/home/seth.png';
import { userStore } from '../contexts/usercontext';

const HomeScreen = () => {
	const globalState = useContext(userStore);
	useEffect(() => {
		console.log(globalState.state.username);
	}, []);
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
				<div style={{ flex: 1, height: '100px' }}>
					<img style={{ width: '150px', marginTop: '20px' }} src={logo} />
				</div>
				<div style={{ flex: 1 }}>
					<Link to="/profile/">
						<img src={profilePic} style={{ width: '75px', float: 'right', marginRight: '20px' }} />
					</Link>
				</div>
				<div style={{ flex: '1 100%', paddingBottom: '30px', paddingTop: '40px' }}>
					<h1 className="welcome">Welcome {globalState.state.username}!</h1>
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
				<div style={{ flex: '1 100%', paddingTop: '30px' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>
					<h1 className="explore">Explore</h1>
					<img src={veggies} />
					<h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>
						one time events in<br />your area
					</h1>
				</div>

				<div style={{ flex: '1 100%' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>Events in your Area</div>
				<div style={{ flex: '1 100%' }}>
					<div style={{ border: '1px solid black', width: '100px' }}>
						<Link to="/event-details">EVENT</Link>
					</div>
				</div>
				<div style={{ flex: '1 100%' }}>Hosts</div>
			</div>
		</div>
	);
};

export default HomeScreen;
