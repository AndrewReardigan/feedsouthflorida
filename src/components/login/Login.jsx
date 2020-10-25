import React, { useState, useEffect } from 'react';
import Signup from '../Signup';
import { db } from '../../apis/firebase';
import './login.css';

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError
	} = props;
	return (
		<div className="login">
			<input
				placeholder="Email"
				type="text"
				autoFocus
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<p className="errorMsg">{emailError}</p>
			<input
				placeholder="Password"
				type="password"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div className="button-div">
				<button className="signin-button" onClick={handleSignup}>
					Sign In
				</button>
				<button className="apple-button">SIGN IN WITH APPLE</button>
				<button className="facebook-button">SIGN IN WITH FACEBOOK</button>
			</div>
		</div>
	);
};

export default Login;
