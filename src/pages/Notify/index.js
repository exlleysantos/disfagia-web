import React, { useRef } from 'react';
import Recdal from 'recdal';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { ModalContent, Option, Options } from './styles';

import { AiOutlineLink } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Notify = () => {
	const modalRef = useRef(null);

	return (
		<>
			<Button onClick={() => modalRef.current.open()}>Novo Compartilhamento</Button>
			<Recdal ref={modalRef}>
				<ModalContent>
					<header>
						<h3>Novo Compartilhamento</h3>

						<button onClick={() => modalRef.current.close()}>
							<IoMdClose />
						</button>
					</header>

					<div>
						<Options>
							<Link to='/share/links'>
								<Option>
									<AiOutlineLink /> Links
								</Option>
							</Link>
							<Link to='/share/class'>
								<Option>
									<FaChalkboardTeacher />
									Vídeo Aulas
								</Option>
							</Link>
							<Link to='/share/docs'>
								<Option>
									<CgFileDocument />
									Arquivos
								</Option>
							</Link>
						</Options>
					</div>
				</ModalContent>
			</Recdal>
		</>
	);
};

export default Notify;
