import styled, { css } from 'styled-components';

export const Container = styled.div`
	background: var(--bg-2);
	overflow-y: auto;
	width: 380px;
	transition: left 300ms;
	max-width: 100vw;

	@media (max-width: 960px) {
		height: 100vh;
		position: absolute;
		top: 0;
		grid-area: none;
		left: ${({ show }) => (show ? 0 : '-300%')};
		z-index: 1001;
	}
`;

export const PicContainer = styled.div`
	padding: 24px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--gray-3);

	& > div {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;

		& > p {
			font-size: 16px;
			font-weight: 500;
			color: var(--heading-1);
			text-transform: cappitalize;
		}

		& > span {
			font-size: 13px;
			color: var(--body-1);
		}
	}
`;

export const Menu = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px 0;
`;

export const LinkItem = styled.span`
	display: flex;
	align-items: center;
	color: var(--heading-1);
	padding: 12px;
	font-size: 16px;
	transition: color 300ms;
	margin-bottom: 4px;
	cursor: pointer;
	position: relative;

	& > svg {
		font-size: 24px;
		margin-right: 6px;
	}

	& > svg.chevron {
		position: absolute;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		font-size: 22px;
		color: var(--heading-1);
		transition: 300ms;
	}

	& > svg.rotate {
		transform: translateY(-50%) rotate(180deg);
	}

	&:hover {
		color: var(--green-forest);

		& > svg {
			color: var(--green-forest) !important;
		}
	}

	${({ active }) =>
		active &&
		css`
			color: var(--green-forest);
			background: var(--green-marine);
		`}
`;

export const Forums = styled.ul`
	width: 100%;
`;

export const Forum = styled.li`
	font-size: 13px;
	color: var(--heading-1);
	font-weight: 500;
	padding: 8px 8px 8px 32px;

	&:hover {
		color: var(--green-forest);
	}

	${({ active }) =>
		active &&
		css`
			color: var(--green-forest);
		`}
`;

export const ToggleMenu = styled.button`
	position: absolute;
	top: 6px;
	right: 6px;
	width: 60px;
	height: 60px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
	background: none;
	margin-right: 12px;
	display: none;

	&:hover {
		& > svg {
			color: var(--green-shrub);
		}
	}

	& > svg {
		color: var(--heading-1);
		font-size: 22px;
	}

	@media (max-width: 960px) {
		display: flex;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.3);
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
	transition: opacity 200ms;
`;

export const collapseTheme = {
	collapse: 'ReactCollapse--collapse',
	content: 'ReactCollapse--content',
};
