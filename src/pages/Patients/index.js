import React, { useState, useRef } from 'react';

import UserProfile from '../../components/UserProfile';
import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { H1, } from '../../components/Typography';
import { Container, EducatorsList } from './styles';

const Educators = () => {
	const searchRef = useRef(null);

	const [patients] = useState([
		{ name: 'Andre Matos', type: 'patient'},
		{ name: 'James Hetfield', type: 'patient' },
		{ name: 'John Lennon', type: 'patient'},
		{ name: 'Maria Duarte', type: 'patient' },
	]);

	return (
		<Container>
			<H1>Seus Pacientes</H1>

			<Form ref={searchRef} columns='4fr 1fr'>
				<Input
					name='search'
					placeholder='Busque um paciente'
				/>
				<Button >Buscar</Button>
			</Form>

			<EducatorsList>
				{patients.map((patient) => (
					<li key={patient.name}>
						<UserProfile data={patient} />
					</li>
				))}
			</EducatorsList>
		</Container>
	);
};

export default Educators;
