import React from 'react';

import { Container, Logo, ToggleMenu } from './styles';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ isMenuOpen, handleToggleMenu }) => {
	return (
		<Container>
			<div>
				<ToggleMenu onClick={handleToggleMenu}>
					{isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
				</ToggleMenu>
				<Logo>
					#Entre<span>Nós</span>NaRede
				</Logo>
			</div>
		</Container>
	);
};

export default Header;
