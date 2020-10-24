import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import { db } from '../apis/firebase';

const Login = (props) => {
	const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount } = props;
	return (
		<section className="login">
			<div className="loginContainer">
				<label>Username: </label>
				<input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
				<p className="errorMsg">{emailError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button>Sign in</button>
                        <p>Dont have an account? <span>Sign Up</span></p>
                        </>
                    )}
                </div>
			</div>;
		</section>
	);
};

export default Login;
