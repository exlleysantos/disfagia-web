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

const ShareDocs = () => {
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
				<H1>Textos, apresentações e livros</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Select size={4} name='type' placeholder='Tipo do arquivo' options={options} />
					<Input size={4} name='title' placeholder='Título do arquivo' />

					<TextArea
						name='description'
						size={4}
						rows={4}
						placeholder='Descrição do conteúdo'
					/>

					<Input size={4} name='link' placeholder='Link' type='link' />

					<Button>Compartilhar</Button>
				</Form>
			</Box>
		</Container>
	);
};

export default ShareDocs;
