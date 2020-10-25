import React, { useState, useEffect } from 'react';
import Signup from '../Signup';
import { db } from '../../apis/firebase';
import './login.css';
import veggies from '../../assets/login/veggies.jpg';
import logo from '../../assets/home/logo_large.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Login = (props) => {
	const {
		// email,
		// setEmail,
		// password,
		// setPassword,
		handleLogin,
		handleSignup,
		// hasAccount,
		// setHasAccount,
		emailError
	} = props;

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<div className="login">
			<img src={veggies} style={{ width: '80%', paddingTop: '0px', marginTop: '-50px' }} />
			<img src={logo} style={{ marginTop: '10px', marginBottom: '30px', width: '50%' }} />

			<input
				placeholder="Email"
				type="text"
				autoFocus
				required
				value={email}
				className="login-input"
				style={{ marginBottom: '5px' }}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<p className="errorMsg">{emailError}</p>
			<input
				placeholder="Password"
				type="password"
				required
				value={password}
				className="login-input "
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div className="button-div">
				<Link to="/home" style={{ textDecoration: 'none' }}>
					<button className="signin-button" onClick={handleSignup}>
						Sign In
					</button>
				</Link>
				<button className="apple-button login-buttons">SIGN IN WITH APPLE</button>
				<button className="facebook-button login-buttons">SIGN IN WITH FACEBOOK</button>
			</div>
		</div>
	);
};

export default Login;
