import React, { useState, useEffect } from 'react';
import { db } from '../apis/firebase';

const Signup = () => {
	const [ user, setUser ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailError, setEmailError ] = useState('');
	const [ passwordError, setPasswordError ] = useState('');
	const [ hasAccount, setHasAccount ] = useState(false);

	const clearInputs = () => {
		setEmail('');
		setPassword('');
	};
	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	// LOGIN ******
	const handleLogin = () => {
		clearErrors();

		db.auth().signinWithEmailAndPassword(email, password).catch((err) => {
			switch (err.code) {
				case 'auth/invalid-email':
				case 'auth/user-disabled':
				case 'auth/user-not-found':
					setEmailError(err.message);
					break;
				case 'auth/wrong-password':
					setPasswordError(err.message);
					break;
			}
		});
	};

	// SIGN UP *****
	const handleSignup = () => {
		clearErrors();
		db.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
			switch (err.code) {
				case 'auth/email-already-in-use':
				case 'auth/invalid-email':
				case 'auth/user-not-found':
					setEmailError(err.message);
					break;
				case 'auth/weak-password':
					setPasswordError(err.message);
					break;
			}
		});
	};

	//LOGOUT ********
	const handleLogout = () => {
		db.auth().signOut();
	};
	// CHECK AND SET IF USER EXISTS *******
	const authListener = () => {
		db.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser('');
			}
		});
	};

	//************ */
	useEffect(() => {
		authListener();
	}, []);

	return (
		<div className="signup">
			<Login
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				handleLogin={handleLogin}
				handleSignup={handleSignup}
				hasAccount={hasAccount}
				setHasAccount={setHasAccount}
				emailError={emailError}
				passwordError={passwordError}
			/>
		</div>
	);
};

export default Signup;
