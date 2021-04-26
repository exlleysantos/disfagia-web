import styled from 'styled-components';

const DRAWER_WIDTH = 500;

export const Container = styled.div`
	position: absolute;
	height: 100vh;
	max-width: 100vw;
	width: ${({ visible }) => (visible ? `${DRAWER_WIDTH}px` : 0)};
	/* right: ${({ visible }) => (visible ? 0 : `-${DRAWER_WIDTH * 2}px`)}; */
    right: 0;
	top: 0;
	background: var(--white);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	transition-duration: 220ms;
	transition-property: width;
	transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	z-index: 10000000000;
`;

export const Overlay = styled.div`
	position: absolute;
	content: '';
	top: 0vh;
	left: ${`calc(${DRAWER_WIDTH}px - 100vw)`};
	height: 100vh;
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	transition: opacity 300ms;
	pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
	width: ${({ visible }) => (visible ? `${`calc(100vw - ${DRAWER_WIDTH}px)`}` : 0)};
	z-index: 1000000000;
	background: rgba(0, 0, 0, 0.4);
`;
