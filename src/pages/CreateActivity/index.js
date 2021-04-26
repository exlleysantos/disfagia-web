import React, { useState, useCallback, useRef } from 'react';

import Button from '../../components/Button';
import Box from '../../components/Box';
import { H1 } from '../../components/Typography';
import { Form, Input, Select, TextArea, Radio } from '../../components/Form';
import { Container } from './styles';

const options = [
	{ label: 'Opção 1', value: 'Opção 1' },
	{ label: 'Opção 2', value: 'Opção 2' },
	{ label: 'Opção 3', value: 'Opção 3' },
];

const CreateCourse = () => {
	const formRef = useRef(null);

	const [withCertificate, setWithCertificate] = useState(false);

	const handleSubmit = useCallback(async (formData) => {
		try {
			formData = { ...formData, withCertificate };
			console.log(formData);
		} catch (error) {
			console.error(error);
		}
	}, [withCertificate]);

	return (
		<Container>
			<Box>
				<H1>Atividade</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Select
						name='type'
						size={4}
						placeholder='Tipo de Atividade'
						options={options}
					/>
					<Input name='title' size={4} placeholder='Título da atividade' />
					<TextArea name='requiriments' size={4} rows={4} placeholder='Requisitos' />
					<Select
						name='destination'
						size={4}
						placeholder='A quem se destina'
						options={options}
					/>
					<TextArea name='description' size={4} rows={4} placeholder='Descrição' />
					<Input name='period' size={2} placeholder='Perído de insrição' />
					<Input name='link' size={2} placeholder='Link' />

					<Radio.Group title='Certificação:' size={4}>
						<Radio.Input
							label='Sim'
							checked={withCertificate}
							onClick={() => setWithCertificate(true)}
						/>
						<Radio.Input
							label='Não'
							checked={!withCertificate}
							onClick={() => setWithCertificate(false)}
						/>
					</Radio.Group>

					<Button>Compartilhar</Button>
				</Form>
			</Box>
		</Container>
	);
};

export default CreateCourse;
