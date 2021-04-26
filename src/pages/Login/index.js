import React, { useRef } from 'react';

import Button from '../../components/Button';
import { Form, Input } from '../../components/Form';
import { Container, FormContainer, Title, SubTitle, Welcome } from './styles';

const Login = () => {
	const formRef = useRef(null);

	return (
		<Container>
			<FormContainer>
				<Title>
					#Entre<span>NÓS</span>NaRede
				</Title>
				<SubTitle>Educadores em interações virtuais</SubTitle>

				<Welcome>
					<p>Seja bem-vind@</p>
					<span>ao #EntreNósNaRede</span>
				</Welcome>

				<Form ref={formRef}>
					<Input name='email' placeholder='Email' size={4} />
					<Input name='password' placeholder='Senha' type='password' size={4} />

					<Button size={4}>Entrar</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Login;
