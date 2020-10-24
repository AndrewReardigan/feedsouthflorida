import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UserProvider } from '../contexts/usercontext';
import Paths from '../routes/Paths';

function Routes() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Route component={Paths} />
			</BrowserRouter>
		</UserProvider>
	);
}

export default Routes;
