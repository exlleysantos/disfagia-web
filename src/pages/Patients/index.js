import React, { useState, useRef, useEffect} from 'react';

import UserProfile from '../../components/UserProfile';
import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { H1, } from '../../components/Typography';
import { Container, PatientsList } from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

const Patients = () => {
	const searchRef = useRef(null);
	const [patients, setPatients] = useState([]);
	console.log("Só Algo")
	
	useEffect(() => {
		let userData = JSON.parse(localStorage.getItem('@USER'));

        api.get(`/healthcare-professionals/${userData.id}`, {
            headers: {
                Authorization: userData.id,
            }
        }).then(response => {
			setPatients(response.data.patients);
        })
	},[]);

	return (
		<Container>
			<H1>Seus Pacientes</H1>

			<Form ref={searchRef} columns='3fr 1fr 1fr'>
				<Input size={1}
					name='search'
					placeholder='Busque um paciente'
				/>
				<Button size={1}>Buscar</Button>
				<Link to='patients/new' >
					<Button size={1}>Novo Paciente</Button>
				</Link>
			</Form>

			<PatientsList>
				{patients.map((patient) => (
					<li key={patient.id}>
						<UserProfile userType={'patient'} data={patient} />
					</li>
				))}
			</PatientsList>
		</Container>
	);
};

export default Patients;
