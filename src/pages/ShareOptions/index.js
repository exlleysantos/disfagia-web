import React from 'react';
import { Link } from 'react-router-dom';

import { H1 } from '../../components/Typography';
import { Container, Option, Options } from './styles';

import { AiOutlineLink } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Forum = () => {
	return (
		<Container>
			<H1>Compartilhe</H1>

			<Options>
				<Link to='/share/links'>
					<Option>
						<AiOutlineLink />
						Links
					</Option>
				</Link>
				<Link to='/share/class'>
					<Option>
						<FaChalkboardTeacher />
						Vídeo-Aulas
					</Option>
				</Link>
				<Link to='/share/docs'>
					<Option>
						<CgFileDocument />
						Documentos
					</Option>
				</Link>
			</Options>
		</Container>
	);
};

export default Forum;
