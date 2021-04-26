import React, { useContext } from 'react';

import { AuthContext } from '../store/Auth';

import AppStack from './app.routes';
import AuthStack from './auth.routes';

const Routes = () => {
	const { isLogged } = useContext(AuthContext);

	if (!isLogged) {
		return <AuthStack />;
	}

	return <AppStack />;
};

export default Routes;
