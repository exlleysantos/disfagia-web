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
				#Entre<span>NÓS</span>NaRede
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
								placeholder='Data de nascimento'
								type='date'
								size={1}
							/>
						</Box>
					</section>

					<section>
						<h3>Dados profissionais</h3>

						<Box>
							<Input
								name='instituition'
								placeholder='Instituição de trabalho'
								size={2}
							/>
							<Select
								name='teachingDegree'
								options={options}
								onChange={({ value }) => setTeachingDegree(value)}
								placeholder='Grau de ensino'
								size={2}
							/>

							{teachingDegree === 2 && (
								<Input name='series' placeholder='Ano/série' size={2} />
							)}

							<Input name='lattes' placeholder='Lattes (opcional)' size={1} />
							<Input name='ocid' placeholder='Ocid (opcional)' size={1} />
							<TextArea name='tags' rows={5} placeholder='Interesses' size={2} />

							<Subjects>
								<h3>Disciplinas que ministra</h3>

								<Input name='subjectName' placeholder='Nome da disciplina' />
								<Button type='button' isGhost onClick={handleAddSubject}>
									<GrFormAdd />
								</Button>

								<ul>
									{subjects.length ? (
										subjects.map((subject, index) => (
											<Subject key={index}>
												<span>{subject}</span>
												<Button
													type='button'
													onClick={() => handleRemoveSubject(index)}>
													<CgTrashEmpty />
												</Button>
											</Subject>
										))
									) : (
										<li className='empty'>
											Você ainda não adicionou uma disciplina
										</li>
									)}
								</ul>
							</Subjects>
						</Box>
					</section>

					<section>
						<h3>Dados da conta</h3>

						<Box>
							<Input name='nickname' placeholder='Nome de usuário' size={2} />
							<Input name='email' placeholder='Email' size={2} />

							<AvatarText>
								<h3>Foto de perfil</h3>
								<span>
									* Escolha sua melhor foto para que os outros usuários vejam.
								</span>
							</AvatarText>

							<FileInput
								label='Foto de perfil'
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
