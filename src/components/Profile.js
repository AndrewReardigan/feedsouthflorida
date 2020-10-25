import React, { useContext } from 'react';
import logo from '../assets/home/logo.png';
import profilePic from '../assets/home/seth.png';
import { userStore } from '../contexts/usercontext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//TODO: white logo
const Profile = () => {
	const globalState = useContext(userStore);
	return (
		<div>
			<div style={{ display: 'flex', flexFlow: 'row wrap', backgroundColor: '#F09826', height: '75px' }}>
				<div style={{ flex: 1, zIndex: '9999' }}>
					<img
						src={logo}
						style={{ width: '100px', position: 'absolute', left: '10px', top: '10px', zIndex: '999' }}
					/>
				</div>
				<div style={{ flex: 1, position: 'absolute', top: '10px', right: '20px' }}>
					<Link to="/profile/">
						<img src={profilePic} style={{ width: '125px' }} />
					</Link>
				</div>
			</div>
			<div style={{ flex: 1, alignItems: 'flex-start' }}>
				<h1 style={{ textAlign: 'left', marginLeft: '40px', marginTop: '20px' }}>
					{globalState.state.username}
				</h1>
			</div>
			<div style={{ flex: '1 100%', marginTop: '40px' }}>
				<h3>TOTAL WEIGHT THIS YEAR</h3>
			</div>
			<div style={{ flex: '1 100%' }}>
				<div
					style={{
						border: '1px solid black',
						width: '50%',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '10px'
					}}
				>
					<h1 className="explore">TESTING</h1>
				</div>
			</div>
			<div style={{ flex: '1 100%', marginTop: '40px' }}>
				<h1>MY DONATIONS</h1>
			</div>
		</div>
	);
};

export default Profile;
