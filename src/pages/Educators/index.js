import React, { useState, useRef } from 'react';

import UserProfile from '../../components/UserProfile';
import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { H1, H2 } from '../../components/Typography';
import { Container, SubtitleContainer, EducatorsList, buttonStyle } from './styles';

const Educators = () => {
	const searchRef = useRef(null);

	const [educators] = useState([
		{ name: 'Victor Silva' },
		{ name: 'Andre Matos' },
		{ name: 'James Hetfield' },
		{ name: 'John Lennon' },
		{ name: 'Maria Duarte' },
	]);

	return (
		<Container>
			<H1>Educadores em Rede</H1>

			<Form ref={searchRef} columns='4fr 1fr'>
				<Input
					name='search'
					placeholder='Busque um professor por nome ou nome de usuário'
				/>
				<Button style={buttonStyle}>Buscar</Button>
			</Form>

			<SubtitleContainer>
				<H2>Professores do 1º ao 5º ano</H2>
				<span>Sugestões de amizade</span>
			</SubtitleContainer>

			<EducatorsList>
				{educators.map((educator) => (
					<li key={educator.name}>
						<UserProfile data={educator} />
					</li>
				))}
			</EducatorsList>
		</Container>
	);
};

export default Educators;
