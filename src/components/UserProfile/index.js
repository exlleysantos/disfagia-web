import React from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import Button from '../Button';
import { MainInfos, MobileFooter, Name, Nickname, Tag, InstitutionName } from './styles';
import { Link } from 'react-router-dom';

import { HiOutlineChatAlt, HiOutlineMail, HiOutlineClipboardList } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import FaClipboardList from 'react-icons/fa';

const UserProfile = ({ userType, ...data }) => {
	if(userType==='patient'){
	return (
		<Box>
			<MainInfos>
				{console.log(data.data.fullname)}
				<Avatar size={150} name={data.data.fullname} round='5px' maxInitials={2} />

				<div className='infos'>
					<div className='row'>
						<Name>{data.data.fullname}</Name>
						<Tag>{userType=== 'patient' ? 'Paciente' : 'Profissional de Saúde'}</Tag>
					</div>

					<div className='row'>
						<Nickname>@{data.data.fullname}</Nickname>
					</div>
					<div className='row'>
						<Link to='patients/anamnese' >							
							<Button icon={HiOutlineClipboardList}>Nova Anamnese</Button>
						</Link>

						<Link to='patients/notify' >							
							<Button icon={IoMdNotificationsOutline}>Notificar</Button>
						</Link>
						
					</div>
				</div>
			</MainInfos>
		</Box>
	);
	}
	if(userType === 'professional'){
	return (
		<Box>
			<MainInfos>
				<Avatar size={150} name={data.fullname} round='5px' maxInitials={2} />

				<div className='infos'>
					<div className='row'>
						<Name>{data.fullname}</Name>
						<Tag>{userType === 'patient' ? 'Paciente' : 'Profissional de Saúde'}</Tag>
					</div>

					<div className='row'>
						<Nickname>@{data.fullname}</Nickname>
					</div>
					<div className='row'>
						<InstitutionName>Insituição</InstitutionName>
					</div>
					<div className='row'>
						<Button icon={HiOutlineMail}>Mensagem</Button>
						
					</div>
				</div>
			</MainInfos>
			<MobileFooter>
				<div className='buttons'>
					<Button icon={HiOutlineChatAlt}>Mensagem</Button>
					<Button icon={HiOutlineMail}>
						Email
					</Button>
				</div>
			</MobileFooter>
		</Box>
	);
	}
};

export default UserProfile;
