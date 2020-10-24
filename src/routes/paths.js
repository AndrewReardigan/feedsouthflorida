import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { userStore } from '../contexts/UserContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Container from '@material-ui/core/Container';

const Paths = () => {
	const globalState = useContext(userStore);
	const { dispatch } = globalState;

	return (
		<Container maxWidth={'100%'} disableGutters>
			{!globalState.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/home" />}
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/home" component={Home} />
				<Route path="*" component={Login} />
			</Switch>
		</Container>
	);
};

export default Paths;
