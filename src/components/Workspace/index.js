import React from 'react';

import Header from '../Header';
import { Container } from './styles';

const Workspace = ({ isMenuOpen, handleToggleMenu, children }) => (
	<Container>
		<Header isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
		<div className='content'>{children}</div>
	</Container>
);

export default Workspace;
