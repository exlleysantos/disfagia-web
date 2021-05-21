import React from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import Button from '../Button';
import { MainInfos, MobileFooter, Name, Nickname, Tag, InstitutionName } from './styles';

import { HiOutlineChatAlt, HiOutlineMail } from 'react-icons/hi';

const UserProfile = ({ data }) => {
	return (
		<Box>
			<MainInfos>
				<Avatar size={150} name={data.name} round='5px' maxInitials={2} />

				<div className='infos'>
					<div className='row'>
						<Name>{data.name}</Name>
						<Tag>{data.type === 'patient' ? 'Paciente' : 'Profissional de Saúde'}</Tag>
					</div>

					<div className='row'>
						<Nickname>@{data.name}</Nickname>
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
					<Button icon={HiOutlineMail} isGhost>
						Email
					</Button>
				</div>
			</MobileFooter>
		</Box>
	);
};

export default UserProfile;
