import React, { useState } from 'react';

import ProfessionalProfile from '../../components/ProfessionalProfile';
import Box from '../../components/Box';
import { Container, BioInfos } from './styles';

// import api from '../../services/api';

const Profile = () => {
	const userData = localStorage.getItem('@USER');
	const user = JSON.parse(userData);
	console.log(user)
	return (
		<Container>
			<Box>
				<ProfessionalProfile data={user} />
			</Box>

			<Box>
				<BioInfos>
					<div>
						<header>
							<h3>Especialização</h3>
						</header>
						<p>
							{(user.specialty_id === 1) ? "Nutricionista" : "Fonoaudiologo"}
						</p>
					</div>

					<div>
						<header>
							<h3>Contato</h3>

							<button>VER</button>
						</header>
					</div>
				</BioInfos>
			</Box>
		</Container>
	);
};

export default Profile;
