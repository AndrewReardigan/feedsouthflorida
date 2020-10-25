import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ReactComponent as Event } from '../assets/home/Event.svg';
import { ReactComponent as Donate } from '../assets/home/donate.svg';
import logo from '../assets/home/logo.png';
import veggies from '../assets/home/veggies.png';
import profilePic from '../assets/home/seth.png';
import { userStore } from '../contexts/usercontext';
import eventphoto from '../assets/home/8c98062bf9c3a234ad969368fe4966f9-1@2x.png';

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
					<h1 style={{ paddingBottom: '0px', paddingTop: '0px', marginBottom: '0px' }} className="explore">
						Explore
					</h1>
					<img src={veggies} />
					<h1 style={{ textTransform: 'uppercase', textAlign: 'center', paddingBottom: '20px' }}>
						one time events in<br />your area
					</h1>
				</div>

				<div style={{ flex: '1 100%' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>
					<div
						style={{
							width: '75%',
							flexFlow: 'row wrap',
							display: 'flex',
							marginLeft: 'auto',
							marginRight: 'auto',
							paddingBottom: '20px',
							paddingTop: '20px'
						}}
					>
						<div style={{ flex: '1 50%' }}>
							<Link style={{ textDecoration: 'none' }} to="/event-details">
								<h3 style={{ color: '#F09826' }}>120LBS</h3>
								<img
									style={{ width: '120px', marginLeft: '5px', marginRight: '5px' }}
									src={eventphoto}
								/>
								<h3>EVENT ONE</h3>
							</Link>
						</div>
						<div style={{ flex: '1 50%' }}>
							<Link style={{ textDecoration: 'none' }} to="/event-details">
								<h3 style={{ color: '#F09826' }}>300LBS</h3>
								<img
									style={{ width: '120px', marginLeft: '5px', marginRight: '5px' }}
									src={eventphoto}
								/>
								<h3 style={{ textDecoration: 'none' }}>EVENT TWO</h3>
							</Link>
						</div>
					</div>
				</div>
				<div style={{ flex: '1 100%' }}>
					<hr style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
				</div>
				<div style={{ flex: '1 100%' }}>
					<h1 style={{ textAlign: 'center', paddingBottom: '10px', paddingTop: '10px' }}>WEEKLY EVENTS</h1>

					<div
						style={{
							width: '75%',
							flexFlow: 'row wrap',
							display: 'flex',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '10px',
							textAlign: 'center',
							alignItems: 'center',
							alignContent: 'center'
						}}
					>
						<div style={{ flex: '1 50%' }}>
							<Link style={{ textDecoration: 'none' }} to="/event-details">
								<h3 style={{ color: '#F09826' }}>120LBS</h3>
								<img
									style={{ width: '120px', marginLeft: '5px', marginRight: '5px' }}
									src={eventphoto}
								/>
								<h3>EVENT ONE</h3>
							</Link>
						</div>
						<div style={{ flex: '1 50%' }}>
							<Link style={{ textDecoration: 'none' }} to="/event-details">
								<h3 style={{ color: '#F09826' }}>300LBS</h3>
								<img
									style={{ width: '120px', marginLeft: '5px', marginRight: '5px' }}
									src={eventphoto}
								/>
								<h3 style={{ textDecoration: 'none' }}>EVENT TWO</h3>
							</Link>
						</div>
					</div>
				</div>
				<div style={{ flex: '1 100%' }}>
					<div style={{ border: '1px solid black', width: '100px' }} />
				</div>
				<div style={{ flex: '1 100%' }}>Hosts</div>
			</div>
		</div>
	);
};

export default HomeScreen;
