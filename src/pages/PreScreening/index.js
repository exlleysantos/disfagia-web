import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import { H1, H3 } from '../../components/Typography';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { Form, Input, Select, TextArea, FileInput, MaskedInput, Radio, Checkbox} from '../../components/Form';
import { Container, FormContainer, Title, Subjects, Subject, AvatarText } from './styles';
import { PRE_SCREENING_ANSWERS, COMORBITIES } from '../../utils/enums'

import { GrFormAdd } from 'react-icons/gr';
import { CgTrashEmpty } from 'react-icons/cg';
import { useCallback } from 'react';

const options = [
	{ value: 1, label: 'Permanente' },
	{ value: 2, label: 'Prótese' },
	{ value: 3, label: 'Ausente' },
];

const PreScreening = () => {
	const formRef = useRef(null);

	const [subjects, setSubjects] = useState([]);
	const [radio, setRadio] = useState("1");
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
			<Title onClick={() => console.log(teachingDegree)}>
				Pré-triagem de Paciente
			</Title>
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
								<Input
									name='birthDate'
									placeholder='Nascimento'
									type='date'
									size={1}
								/>
							</Box>
						</section>

						<section>
							<Box>
								<Select 
									name='comorbities' 
									options={COMORBITIES}
								/>
							</Box>
						</section>

						<h3>Pré-triagem</h3>
						
						<section>
							<Box>
								<H3>Marque as condições apresentadas pelo paciente:</H3>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_1}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_2}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_3}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_4}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_5}
								/>
								<H3>Dentição: </H3>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_6_1}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_6_2}
								/>
								<Checkbox size = {3}
								name='quesiton'
								label={PRE_SCREENING_ANSWERS.ASNWER_6_3}
								/>
							</Box>
						</section>

						<h3>Escala EAT-10</h3>
						<section>

							<Box>
								<Input
									id='1'
									name='question1' 
									type='radio'
									label='1' 
								/>
								<Input
									id='1'
									name='question1' 
									type='radio'
									label='1' 
								/>
								<Input
									id='1'
									name='question1' 
									type='radio'
									label='1' 
								/>
							</Box>
						</section>
					<Button size={4}>Finalizar pré-triagem</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default PreScreening;
