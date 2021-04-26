import styled, { css } from 'styled-components';

export const Container = styled.button`
	grid-column: span ${({ size }) => size || 1};
	border-radius: 5px;
	background-color: ${({ isGhost }) => (isGhost ? 'transparent' : 'var(--purple)')};
	border: 1px solid var(--purple);
	color: ${({ isGhost }) => (isGhost ? 'var(--purple)' : 'var(--white)')};
	font-size: 16px;
	height: 38px;
	text-align: center;
	font-weight: 400;
	cursor: pointer;
	letter-spacing: 0.5px;
	transition: 300ms;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 32px;

	& > div.loader {
		margin-bottom: -2px;
	}

	& > svg {
		color: ${({ isGhost }) => (isGhost ? 'var(--purple)' : 'var(--white)')};
		margin-right: 12px;
		font-size: 22px;
		min-width: 22px;
	}

	&:hover {
		background-color: ${({ isGhost }) =>
			isGhost ? 'var(--purple-opacity)' : 'var(--purple-hover)'};
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7 !important;
			user-select: none;
		`}

	@media(max-width: 350px) {
		& > svg {
			display: none;
		}
	}
`;

export const IconButtonContainer = styled.button`
	background-color: ${({ isGhost }) => (isGhost ? 'transparent' : 'var(--purple)')};
	border: 1px solid var(--purple);
	color: ${({ isGhost }) => (isGhost ? 'var(--purple)' : 'var(--white)')};
	width: 38px;
	height: 38px;
	min-width: 38px;
	min-height: 38px;
	cursor: pointer;
	transition: 300ms;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;

	& > svg {
		color: #fff;
		font-size: 19px;
	}

	& > div.loader {
		margin-bottom: -2px;
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7 !important;
			user-select: none;
		`}
`;
