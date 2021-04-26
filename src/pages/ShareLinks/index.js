import React, { useCallback, useRef } from 'react';

import Button from '../../components/Button';
import Box from '../../components/Box';
import { H1 } from '../../components/Typography';
import { Form, TextArea, Input, Select } from '../../components/Form';
import { Container } from './styles';

const options = [
	{ label: 'Opção 1', value: 'Opção 1' },
	{ label: 'Opção 2', value: 'Opção 2' },
	{ label: 'Opção 3', value: 'Opção 3' },
	{ label: 'Opção 4', value: 'Opção 4' },
];

const ShareLinks = () => {
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (formData) => {
		try {
			console.log(formData);
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<Container>
			<Box>
				<H1>Links</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Select size={4} name='type' placeholder='Tipo do conteúdo' options={options} />
					<Input size={4} name='serie' placeholder='Ano / Série / Disciplina' />
					<TextArea
						name='description'
						size={4}
						rows={4}
						placeholder='Descrição do conteúdo'
					/>

					<Button>Compartilhar</Button>
				</Form>
			</Box>
		</Container>
	);
};

export default ShareLinks;
