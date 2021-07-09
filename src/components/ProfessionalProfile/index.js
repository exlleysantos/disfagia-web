import React from 'react';
import Avatar from 'react-avatar';

import Box from '../Box';
import { MainInfos, Name, Tag } from './styles';

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
				</div>
			</MainInfos>
		</Box>
	);
};

export default UserProfile;
