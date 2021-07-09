import React, { useCallback, useRef } from 'react';
import Avatar from 'react-avatar';

import Recdal from 'recdal';

import Box from '../Box';
import Button from '../Button';
import { Form, Input, Select, TextArea } from '../Form';
import { MainInfos, Name, Tag, ModalContent } from './styles';
import { Link } from 'react-router-dom';
//import { Option, Options } from './styles';

import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import { NOTIFICATION_TYPES } from '../../utils/enums';

const UserProfile = ({ userType, ...data }) => {
	const modalRef = useRef(null);
	const formRef = useRef(null);

	const handleSubmit = useCallback();

	if (userType === 'patient') {
		return (
			<Box>
				<MainInfos>
					{console.log(data.data.fullname)}
					<Avatar size={150} name={data.data.fullname} round='5px' maxInitials={2} />

					<div className='infos'>
						<div className='row'>
							<Name>{data.data.fullname}</Name>
							<Tag>
								{userType === 'patient' ? 'Paciente' : 'Profissional de Saúde'}
							</Tag>
						</div>
						<div className='row'>
							<Link to='patients/anamnese'>
								<Button icon={HiOutlineClipboardList}>Nova Anamnese</Button>
							</Link>

							<Button
								onClick={() => modalRef.current.open()}
								icon={IoMdNotificationsOutline}>
								Notificar
							</Button>
						</div>
					</div>
				</MainInfos>
				<Recdal ref={modalRef}>
					<ModalContent>
						<header>
							<h3>Notificar Paciente</h3>

							<button onClick={() => modalRef.current.close()}>
								<IoMdClose />
							</button>
						</header>

						<div>
							<Form style={{ width: '100%' }} ref={formRef} onSubmit={handleSubmit}>
								<Input size={3} name='name' placeholder='Título' />
								<Select
									name='notification_type'
									placeholder='Tipo'
									options={NOTIFICATION_TYPES}
								/>
								<TextArea size={4} name='name' placeholder='Mensagem' />
								<Button disabled={true}>Notificar</Button>
							</Form>
						</div>
					</ModalContent>
				</Recdal>
			</Box>
		);
	}
	if (userType === 'professional') {
		return (
			<Box>
				<MainInfos>
					<Avatar size={150} name={data.fullname} round='5px' maxInitials={2} />

					<div className='infos'>
						<div className='row'>
							<Name>{data.fullname}</Name>
							<Tag>
								{userType === 'patient' ? 'Paciente' : 'Profissional de Saúde'}
							</Tag>
						</div>
					</div>
				</MainInfos>
			</Box>
		);
	}
};

export default UserProfile;
