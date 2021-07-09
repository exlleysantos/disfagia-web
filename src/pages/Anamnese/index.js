import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';

//import { H1, H3 } from '../../components/Typography';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { Form, Input, Select, MaskedInput } from '../../components/Form';
import { Container, FormContainer, Title, Subjects, Subject } from './styles';
import { COMORBITIES, SEX, MARITAL_STATUS } from '../../utils/enums';

import { GrFormAdd } from 'react-icons/gr';
import { CgTrashEmpty } from 'react-icons/cg';
import { useCallback } from 'react';

const Anamnese = () => {
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
					name: Yup.string().required('Informe o nome do paciente'),
					cpf: Yup.string().required('Informe CPF do paciente'),
					birthDate: Yup.string().required('Informe a data de nascimento'),
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
			<Title onClick={() => console.log(teachingDegree)}>Anamnese de Paciente</Title>
			<FormContainer>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h3>Dados pessoais</h3>
					<section>
						<Box>
							<Input name='name' placeholder='Nome completo do paciente' size={2} />

							<MaskedInput
								name='cpf'
								placeholder='CPF'
								mask='999.999.999-99'
								size={1}
							/>
							<Input name='birthDate' placeholder='Nascimento' type='date' size={1} />
							<Input name='name' placeholder='Endereço' size={2} />
							<Input name='name' placeholder='Cidade - Estado' size={1} />
							<Input name='name' placeholder='Ocupação' size={1} />
							<Select size={1} name='sex' placeholder='Sexo' options={SEX} />
							<Select
								size={1}
								name='maritalStatus'
								placeholder='Estado Conjugal'
								options={MARITAL_STATUS}
							/>
						</Box>
					</section>

					<h3>Dados de Saúde</h3>
					<section>
						<Box>
							<Subjects>
								<h3>Doenças Pré-existentes</h3>

								<Select
									name='subjectName'
									placeholder='Doenças Pré-existentes'
									options={COMORBITIES}
								/>

								<Button type='button' isGhost onClick={handleAddSubject}>
									<GrFormAdd />
								</Button>

								<ul>
									{subjects.length ? (
										subjects.map((subject, index) => (
											<Subject key={index}>
												{console.log(subject)}
												<span>{subject}</span>
												{console.log('subject', subject)}
												<Button
													type='button'
													onClick={() => handleRemoveSubject(index)}>
													<CgTrashEmpty />
												</Button>
											</Subject>
										))
									) : (
										<li className='empty'>
											Sem doenças pré-existentes adicionadas
										</li>
									)}
								</ul>
							</Subjects>
						</Box>
					</section>

					<Button disabled={true} size={4}>
						Finalizar Anamnese
					</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Anamnese;
