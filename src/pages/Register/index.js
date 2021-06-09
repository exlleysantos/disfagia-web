import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import { H1 } from '../../components/Typography';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { Form, Input, Select, TextArea, FileInput, MaskedInput } from '../../components/Form';
import { Container, FormContainer, Title, Subjects, Subject, AvatarText } from './styles';

import { GrFormAdd } from 'react-icons/gr';
import { CgTrashEmpty } from 'react-icons/cg';
import { useCallback } from 'react';

const options = [
	{ value: 1, label: 'Ensino fundamental' },
	{ value: 2, label: 'Ensino médio' },
	{ value: 3, label: 'Ensino superior' },
];

const Register = () => {
	const formRef = useRef(null);

	const [subjects, setSubjects] = useState([]);
	const [teachingDegree, setTeachingDegree] = useState(undefined);

	const handleAddSubject = useCallback(() => {
		const subject = formRef.current.getFieldValue('subjectName');

		if (!subject) {
			return formRef.current.setFieldError('subjectName', 'Informe o nome da disciplina');
		}

		setSubjects((subjects) => [...subjects, subject]);
		formRef.current.setFieldValue('subjectName', '');
	}, []);

	const handleRemoveSubject = useCallback((removedIndex) => {
		return setSubjects((subjects) => subjects.filter((_, index) => index !== removedIndex));
	}, []);

	const handleSubmit = useCallback(
		async (formData) => {
			try {
				console.log(formData);

				const validationSchema = Yup.object().shape({
					name: Yup.string().required('Informe seu nome'),
					cpf: Yup.string().required('Informe seu SPF'),
					birthDate: Yup.string().required('Informe sua data de nascimento'),
					instituition: Yup.string().required('Campo obrigatório'),
					teachingDegree: Yup.string().required('Campo obrigatório'),
					tags: Yup.string().required('Campo obrigatório'),
					nickname: Yup.string().required('Campo obrigatório'),
					email: Yup.string().required('Campo obrigatório'),
				});

				await validationSchema.validate(formData, { abortEarly: false });

				formRef.current.setErrors({});

				if (!subjects.length) {
					alert('Informe suas disciplinas');
					return formRef.current.setFieldError('subjectName', 'Informe suas disciplinas');
				}

				const payload = new FormData();

				for (const key in formData) {
					payload.append(key, formData[key]);
				}

				payload.append('subjects', subjects);

				return console.log(payload.getAll());
			} catch (error) {
				console.error(error);

				if (error instanceof Yup.ValidationError) {
					const errors = {};

					error.inner.forEach(({ path, message }) => (errors[path] = message));
					return formRef.current.setErrors(errors);
				}
			}
		},
		[subjects]
	);

	return (
		<Container>
			<Title onClick={() => console.log(teachingDegree)}>
				Pré-triagem de Paciente
			</Title>
			<FormContainer>
				<H1>Cadastro</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<section>
						<h3>Dados pessoais</h3>

						<Box>
							<Input name='name' placeholder='Nome completo' size={2} />
							<MaskedInput
								name='cpf'
								placeholder='CPF'
								mask='999.999.999-99'
								size={1}
							/>
							<Input
								name='birthDate'
								placeholder='Nascimento'
								type='date'
								size={1}
							/>
						</Box>
					</section>

					<section>
						<h3>Observações</h3>

						<Box>
							<TextArea name='tags' rows={5} placeholder='Observações' size={2} />
						</Box>
					</section>

					<section>
						<h3>Outras Informações</h3>
						<Box>
							<AvatarText>
								<h3>Arquivo adicional</h3>
							</AvatarText>

							<FileInput
								label='Escolha ou solte um arquivo aqui'
								name='avatar'
								accept={['jpg', 'jpeg', 'png']}
								overlayText='Foto de perfil'
								size={2}
							/>
						</Box>
					</section>

					<Button size={4}>Cadastrar</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Register;
