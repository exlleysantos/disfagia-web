import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { Link, useLocation } from 'react-router-dom';
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
import { AiOutlinePlayCircle, AiOutlineLogout, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineChatAlt } from 'react-icons/hi';
import { HiOutlineUserGroup } from 'react-icons/hi'
import {AiFillReconciliation} from 'react-icons/ai'
import { GiMedicalPackAlt } from 'react-icons/gi'
import { FiShare2 } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import userEvent from '@testing-library/user-event';

const Navigation = ({user }, { showMenu, handleCloseMenu }) => {
	user = {
		name: 'Exlley Santos',
		//type :'nutritionist'
		//type : 'speech_therapist'
		type : 'nurse'
	}
	const { pathname } = useLocation();

	const [showOverlay, setShowOverlay] = useState(false);
	const [showForums, setShowForums] = useState(() => {
		return pathname.includes('medical') ? true : false;
	});

	useEffect(() => {
		if (showMenu) {
			setTimeout(() => {
				setShowOverlay(true);
			}, 250);
		}

		setShowOverlay(false);
	}, [showMenu]);
	if(user.type === 'nutritionist')
	return (
		<>
			<Container show={showMenu}>
				<ToggleMenu onClick={handleCloseMenu}>
					<AiOutlineClose />
				</ToggleMenu>

				<PicContainer>
					<Avatar round='5px' name='Exlley Santos' />
					<div>
						<p>{user.name}</p>
						<span>{user.type}</span>
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
							<HiOutlineUserGroup/> Meus Pacientes
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
							<Link to={{ pathname: '/nutritionist/pre-triagem', state: { from: pathname } }}>
								<Forum>Pré-Triagem</Forum>
							</Link>
							<Link to={{ pathname: 'nutritionist/eating-plan', state: { from: pathname } }}>
								<Forum>Plano Alimentar</Forum>
							</Link>
							<Link to={{ pathname: 'nutritionist/nutritional-risk-screening', state: { from: pathname } }}>
								<Forum>Avaliação de Risco Nutricional</Forum>
							</Link>
						</Forums>
					</Collapse>
					<LinkItem>
						<AiOutlineLogout /> Sair
					</LinkItem>
				</Menu>
			</Container>

			<Overlay visible={showOverlay} onClick={handleCloseMenu} />
		</>
	);
	if(user.type === 'speech_therapist')
	return (
		<>
			<Container show={showMenu}>
				<ToggleMenu onClick={handleCloseMenu}>
					<AiOutlineClose />
				</ToggleMenu>

				<PicContainer>
					<Avatar round='5px' name='Exlley Santos' />
					<div>
						<p>Outro User</p>
						<span>@Exlley Santos</span>
					</div>
				</PicContainer>

				<Menu>
					<Link to={{ pathname: '/profile', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('profile')}>
							<CgProfile /> Perfil
						</LinkItem>
					</Link>

					<Link to={{ pathname: '/educators', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('educator')}>
							<HiOutlineUserGroup/> Meus Pacientes
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
							<Link to={{ pathname: '/speech-therapist/pre-triagem', state: { from: pathname } }}>
								<Forum>Pré-Triagem</Forum>
							</Link>
							<Link to={{ pathname: '/speech-therapist/', state: { from: pathname } }}>
								<Forum>Lorem Ipsum</Forum>
							</Link>
							<Link to={{ pathname: '/speech-therapist/', state: { from: pathname } }}>
								<Forum>Lorem Ipsum</Forum>
							</Link>
						</Forums>
					</Collapse>
					<LinkItem>
						<AiOutlineLogout /> Sair
					</LinkItem>
				</Menu>
			</Container>

			<Overlay visible={showOverlay} onClick={handleCloseMenu} />
		</>
	);
	if(user.type === 'nurse')
	return (
		<>
			<Container show={showMenu}>
				<ToggleMenu onClick={handleCloseMenu}>
					<AiOutlineClose />
				</ToggleMenu>

				<PicContainer>
					<Avatar round='5px' name='Exlley Santos' />
					<div>
						<p>Outro User</p>
						<span>@Exlley Santos</span>
					</div>
				</PicContainer>

				<Menu>
					<Link to={{ pathname: '/profile', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('profile')}>
							<CgProfile /> Perfil
						</LinkItem>
					</Link>

					<Link to={{ pathname: '/educators', state: { from: pathname } }}>
						<LinkItem active={pathname.includes('educator')}>
							<HiOutlineUserGroup/> Meus Pacientes
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
							<Link to={{ pathname: '/nurse/anamnese', state: { from: pathname } }}>
								<Forum>Anamnese</Forum>
							</Link>
						</Forums>
					</Collapse>
					<LinkItem>
						<AiOutlineLogout /> Sair
					</LinkItem>
				</Menu>
			</Container>

			<Overlay visible={showOverlay} onClick={handleCloseMenu} />
		</>
	);
};

export default Navigation;
