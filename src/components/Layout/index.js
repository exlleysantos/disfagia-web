import React, { useState, useCallback } from 'react';

import Navigation from '../Navigation';
import Workspace from '../Workspace';
import { Container } from './styles';

const Layout = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);

	const handleToggleMenu = useCallback(
		(visible) => {
			setShowMenu(visible || !showMenu);
		},
		[showMenu]
	);

	return (
		<Container>
			<Navigation handleCloseMenu={() => handleToggleMenu(false)} showMenu={showMenu} />
			<Workspace handleToggleMenu={handleToggleMenu} isMenuOpen={showMenu}>
				{children}
			</Workspace>
		</Container>
	);
};

export default Layout;
