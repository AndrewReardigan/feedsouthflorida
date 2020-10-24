import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { StateProvider } from '../contexts/usercontext';
import Paths from './Paths';

function Routes() {
	return (
		<CookiesProvider>
			<StateProvider>
				<BrowserRouter>
					<Route component={Paths} />
				</BrowserRouter>
			</StateProvider>
		</CookiesProvider>
	);
}

export default Routes;
