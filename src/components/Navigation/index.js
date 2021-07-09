import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Collapse } from 'react-collapse';

import {
	Container,
	PicContainer,
	Menu,
	LinkItem,
	Forums,
	Forum,
	Overlay,
	ToggleMenu,
	collapseTheme,
} from './styles';

import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiMedicalPackAlt } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';

const Navigation = ({ showMenu, handleCloseMenu }) => {
	const userData = localStorage.getItem('@USER');
	const user = JSON.parse(userData);
	const history = useHistory();

	const { pathname } = useLocation();

	const [showOverlay, setShowOverlay] = useState(false);
	const [showForums, setShowForums] = useState(() => {
		return pathname.includes('medical') ? true : false;
	});

	function handleLogout() {
		localStorage.clear();
		history.push('/login');
		history.go(0);
	}

	useEffect(() => {
		if (showMenu) {
			setTimeout(() => {
				setShowOverlay(true);
			}, 250);
		}

		setShowOverlay(false);
	}, [showMenu]);

	if (user.specialty_id === 1) {
		return (
			<>
				<Container show={showMenu}>
					<ToggleMenu onClick={handleCloseMenu}>
						<AiOutlineClose />
					</ToggleMenu>

					<PicContainer>
						<Avatar round='5px' name={user.name} />
						<div>
							<p>{user.name}</p>
							<span>Nutricionista</span>
						</div>
					</PicContainer>

					<Menu>
						<Link to={{ pathname: '/profile', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('profile')}>
								<CgProfile /> Perfil
							</LinkItem>
						</Link>

						<Link to={{ pathname: '/patients', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('patient')}>
								<HiOutlineUserGroup /> Meus Pacientes
							</LinkItem>
						</Link>
						<LinkItem
							onClick={() => setShowForums(!showForums)}
							active={pathname.includes('medical')}>
							<GiMedicalPackAlt /> Opções Médicas
							<BiChevronDown className={`${showForums ? 'rotate' : ''} chevron`} />
						</LinkItem>

						<Collapse isOpened={showForums} theme={collapseTheme}>
							<Forums>
								<Link
									to={{
										pathname: 'nutritionist/subjective-nutritional-assessment',
										state: { from: pathname },
									}}>
									<Forum>Avaliação Nutricional Subjetiva</Forum>
								</Link>
							</Forums>
						</Collapse>
						<LinkItem onClick={() => handleLogout()}>
							<AiOutlineLogout /> Sair
						</LinkItem>
					</Menu>
				</Container>

				<Overlay visible={showOverlay} onClick={handleCloseMenu} />
			</>
		);
	}
	if (user.specialty_id === 2) {
		return (
			<>
				<Container show={showMenu}>
					<ToggleMenu onClick={handleCloseMenu}>
						<AiOutlineClose />
					</ToggleMenu>

					<PicContainer>
						<Avatar round='5px' name={user.name} />
						<div>
							<p>{user.name}</p>
							<span>Fonoaudiólogo(a)</span>
						</div>
					</PicContainer>

					<Menu>
						<Link to={{ pathname: '/profile', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('profile')}>
								<CgProfile /> Perfil
							</LinkItem>
						</Link>

						<Link to={{ pathname: '/patients', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('educator')}>
								<HiOutlineUserGroup /> Meus Pacientes
							</LinkItem>
						</Link>
						<LinkItem
							onClick={() => setShowForums(!showForums)}
							active={pathname.includes('medical')}>
							<GiMedicalPackAlt /> Opções Médicas
							<BiChevronDown className={`${showForums ? 'rotate' : ''} chevron`} />
						</LinkItem>

						<Collapse isOpened={showForums} theme={collapseTheme}>
							<Forums>
								<Link
									to={{
										pathname: '/speech-therapist/pre-triagem',
										state: { from: pathname },
									}}>
									<Forum>Pré-Triagem</Forum>
								</Link>
							</Forums>
						</Collapse>
						<LinkItem onClick={() => handleLogout()}>
							<AiOutlineLogout /> Sair
						</LinkItem>
					</Menu>
				</Container>

				<Overlay visible={showOverlay} onClick={handleCloseMenu} />
			</>
		);
	}
	if (user.specialty_id === 3) {
		return (
			<>
				<Container show={showMenu}>
					<ToggleMenu onClick={handleCloseMenu}>
						<AiOutlineClose />
					</ToggleMenu>

					<PicContainer>
						<Avatar round='5px' name={user.name} />
						<div>
							<p>{user.name}</p>
							<span>Enfermeiro (a)</span>
						</div>
					</PicContainer>

					<Menu>
						<Link to={{ pathname: '/profile', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('profile')}>
								<CgProfile /> Perfil
							</LinkItem>
						</Link>

						<Link to={{ pathname: '/patients', state: { from: pathname } }}>
							<LinkItem active={pathname.includes('educator')}>
								<HiOutlineUserGroup /> Meus Pacientes
							</LinkItem>
						</Link>
						<LinkItem
							onClick={() => setShowForums(!showForums)}
							active={pathname.includes('medical')}>
							<GiMedicalPackAlt /> Opções Médicas
							<BiChevronDown className={`${showForums ? 'rotate' : ''} chevron`} />
						</LinkItem>

						<Collapse isOpened={showForums} theme={collapseTheme}>
							<Forums>
								<Link
									to={{ pathname: '/nurse/anamnese', state: { from: pathname } }}>
									<Forum>Anamnese</Forum>
								</Link>
							</Forums>
						</Collapse>
						<LinkItem onClick={() => handleLogout()}>
							<AiOutlineLogout /> Sair
						</LinkItem>
					</Menu>
				</Container>

				<Overlay visible={showOverlay} onClick={handleCloseMenu} />
			</>
		);
	}
};

export default Navigation;
