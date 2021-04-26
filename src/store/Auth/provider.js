import React, { useState } from 'react';

import AuthContext from './context';

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem('@USER') || sessionStorage.getItem('@USER');

		if (storedUser) {
			const storedToken = localStorage.getItem('@AUTH') || sessionStorage.getItem('@AUTH');

			const user = JSON.parse(storedUser);

			setAuth(storedToken);

			return user;
		}

		return null;
	});

	const signIn = (user, token, persistLogged) => {
		const storage = persistLogged ? localStorage : sessionStorage;

		storage.setItem('@AUTH', token);
		storage.setItem('@USER', JSON.stringify(user));

		setUser(user);
		window.location.href = '/home';
	};

	const signOut = () => {
		setUser(null);

		localStorage.clear();
		sessionStorage.clear();

		window.location.href = '/';
	};

	return (
		<AuthContext.Provider value={{ isLogged: true, user, signIn, signOut, auth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
