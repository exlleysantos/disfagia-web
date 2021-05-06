import React, { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import Box from '../../components/Box';
import { Container, BioInfos } from './styles';

// import api from '../../services/api';

const Profile = () => {
	const [user] = useState({ name: 'Exlley Santos', type: 'Nutritionist'});

	return (
		<Container>
			<Box>
				<UserProfile data={user} />
			</Box>

			<Box>
				<BioInfos>
					<div>
						<header>
							<h3>Especialização</h3>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, in pellentesque
							tempus felis, sociis elit, euismod enim, tincidunt duis.
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
