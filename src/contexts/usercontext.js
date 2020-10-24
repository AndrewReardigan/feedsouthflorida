import React, { createContext, useReducer } from 'react';
const initialState = [];
const userStore = createContext(initialState);
const { Provider } = userStore;

const reducer = (state, action) => {
	let newState;
	console.log('reduced');
	switch (action.type) {
		case 'setUser': //Set initial items context after first item scanned.
			console.log(`action value:${JSON.stringify(action.value)}`);
			newState = { ...state, user: action.value }; // do something with the action
			console.log('NEW STATE:', newState);
			return newState;

		default:
			throw new Error();
	}
};

const UserProvider = ({ children }) => {
	const [ state, itemDispatch ] = useReducer(reducer, initialState);
	return <Provider value={{ state, itemDispatch }}>{children}</Provider>;
};

export { userStore, UserProvider };
