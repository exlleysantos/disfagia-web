import React, { useState, useRef } from 'react';
import * as Yup from 'yup';

import Box from '../../components/Box';
import Button from '../../components/Button';
import { Form, Input, MaskedInput, Radio, Checkbox } from '../../components/Form';
import { Container, FormContainer, Title } from './styles';

import { useCallback } from 'react';

const SubjectiveNutritionalAssessment = () => {
	const formRef = useRef(null);

	const [subjects, setSubjects] = useState([]);
	const [teachingDegree, setTeachingDegree] = useState(undefined);
	const [hasWeightChanged, setHasWeightChanged] = useState(true);
	const [loseWeightPercent, setLoseWeightPercent] = useState(0);
	const handleSubmit = useCallback(
		async (formData) => {
			try {
				console.log(formData);

				const validationSchema = Yup.object().shape({
					name: Yup.string().required('Informe o nome do paciente'),
					cpf: Yup.string().required('Informe CPF do paciente'),
					hasWeightChanged: Yup.boolean().required('Responda a questão'),
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
				Avaliação Nutricional Subjetiva (ANS)
			</Title>
			<FormContainer>
				<Form ref={formRef} onSubmit={console.log('ok')}>
					<h3>A - Anamnese</h3>
					<section>
						<Box>
							<Input name='name' placeholder='Nome completo do paciente' size={2} />

							<MaskedInput
								name='cpf'
								placeholder='CPF'
								mask='999.999.999-99'
								size={1}
							/>
							<Input name='weigth' placeholder='Peso atual em Kg' size={1} />
							<Input name='hWeigth' placeholder='Peso habitual em Kg' size={1} />
							<h3>A perda de peso em % é: {loseWeightPercent} %</h3>

							<h4>1. Peso Corpóreo</h4>
							<Radio.Group title='Peso Mudou nos ultimos 2 meses?' size={2}>
								<Radio.Input
									name='hasWeigthChanged'
									checked={hasWeightChanged}
									onClick={() => setHasWeightChanged(true)}
									value='1'
									label='Sim'
								/>
								<Radio.Input
									name='hasWeigthChanged'
									checked={!hasWeightChanged}
									onClick={() => setHasWeightChanged(false)}
									value='0'
									label='Não'
								/>
							</Radio.Group>

							<Radio.Group title='Continua perdendo atualmente?' size={2}>
								<Radio.Input value='1' name='eat-10' label='Sim' />
								<Radio.Input value='1' name='eat-10' label='Não' />
							</Radio.Group>

							<h4>2. Dieta</h4>
							<Radio.Group title='Mudança de dieta?' size={2}>
								<Radio.Input value='1' name='eat-10' label='Sim' />
								<Radio.Input value='1' name='eat-10' label='Não' />
							</Radio.Group>
							<Radio.Group title='A mudança foi para?' size={2}>
								<Radio.Input value='1' name='eat-10' label='Dieta Hipocalórica' />
								<Radio.Input
									value='1'
									name='eat-10'
									label='Dieta Pastosa Hipocalórica'
								/>
								<Radio.Input
									value='1'
									name='eat-10'
									label='Dieta líquida > 15 dias ou solução de infusão intravenosa > 5 dias'
								/>
								<Radio.Input value='1' name='eat-10' label='Jejum > 5 dias' />
								<Radio.Input
									value='1'
									name='eat-10'
									label='Mudança persistente > 30 dias'
								/>
							</Radio.Group>

							<h4 size={2}>
								3. Sintomas gastrointestinais (persistem por mais de duas semanas
							</h4>
							<Checkbox size={2} name='quesiton' label='Disfagia e/ou odinofagia' />
							<Checkbox size={2} name='quesiton' label='Náuseas' />
							<Checkbox size={2} name='quesiton' label='Vômitos' />
							<Checkbox size={2} name='quesiton' label='Diarréia' />
							<Checkbox
								size={2}
								name='quesiton'
								label='Anorexia, distensão abdominal, dor abdominal'
							/>
							<h4>4. Capacidade funcional física (por mais de duas semanas)</h4>
							<Radio.Group size={2}>
								<Radio.Input value='1' name='eat-10' label='Abaixo do normal' />
								<Radio.Input value='1' name='eat-10' label='Acamado' />
							</Radio.Group>

							<h4 size={2}>5. Diagnóstico</h4>
							<Radio.Group size={2}>
								<Radio.Input value='1' name='eat-10' label='Baixo estresse' />
								<Radio.Input value='1' name='eat-10' label='Moderado estresse' />
								<Radio.Input value='1' name='eat-10' label='Alto estresse' />
							</Radio.Group>
						</Box>
					</section>
					<h3>B - Exame Físico</h3>
					<section>
						<Box>
							<h4 size={2}>
								6. Sintomas gastrointestinais (persistem por mais de duas semanas
							</h4>
							<Checkbox
								size={2}
								name='quesiton'
								label='Perda degordura subcutânea (bíceps, tórax)'
							/>
							<Checkbox size={2} name='quesiton' label='Musculo estriado' />
							<Checkbox size={2} name='quesiton' label='Edema sacral' />
							<Checkbox size={2} name='quesiton' label='Ascite' />
							<Checkbox size={2} name='quesiton' label='Edema tornozelo' />
						</Box>
					</section>
					<h3>C - Categoria da ANS</h3>
					<section>
						<Box>Resultado:</Box>
					</section>

					<Button disabled={true} size={4}>
						Finalizar Avaliação
					</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default SubjectiveNutritionalAssessment;
