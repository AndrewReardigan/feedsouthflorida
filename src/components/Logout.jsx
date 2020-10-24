import React from 'react';

const Logout = ({ handleLogout }) => {
	return (
		<div>
			<h2>Welcome</h2>
			<button onClick={handleLogout} />
		</div>
	);
};

export default Logout;
