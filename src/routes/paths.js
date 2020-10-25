import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { userStore } from '../contexts/usercontext';
import Home from '../components/HomeScreen';
import Login from '../components/Login';
import HostEvent from '../components/HostEvent';
import EventDetails from '../components/EventDetails';
import MakeDonation from '../components/MakeDonation';
import Profile from '../components/Profile';

const Paths = () => {
	const globalState = useContext(userStore);
	const { dispatch } = globalState;

	return (
		<div style={{ width: '100%', textAlign: 'center' }}>
			{/* {!globalState.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/home" />} */}
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/home" component={Home} />
				<Route path="/host-event" component={HostEvent} />
				<Route path="/profile" component={Profile} />
				<Route path="/make-donation" component={MakeDonation} />
				<Route path="/event-details" component={EventDetails} />
				<Route path="/host-details" component={HostEvent} />
				<Route path="*" component={Login} />
			</Switch>
		</div>
	);
};

export default Paths;
