import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import { db } from '../apis/firebase';

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
		<section className="login">
			<div className="loginContainer">
				<label>Username: </label>
				<input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
				<p className="errorMsg">{emailError}</p>
				<label>Password:</label>
				<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="btnContainer">
					{hasAccount ? (
						<div>
							<button onClick={handleSignup}>Sign in</button>
							<p>
								Dont have an account? <span>Sign Up</span>
							</p>
						</div>
					) : (
						//TERNARY *******************
						<div>
							<button onClick={handleSignup}>Sign Up</button>

							<p>
								Have an Account? <span>Sign in</span>
							</p>
						</div>
					)}
				</div>
			</div>;
		</section>
	);
};

export default Login;
