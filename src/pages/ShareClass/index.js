import React, { useCallback, useRef } from 'react';

import Button from '../../components/Button';
import Box from '../../components/Box';
import { H1 } from '../../components/Typography';
import { Form, TextArea, Input } from '../../components/Form';
import { Container } from './styles';

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
				<H1>Vídeo-Aulas</H1>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input size={4} name='title' placeholder='Título da aula' />
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
