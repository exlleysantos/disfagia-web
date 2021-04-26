import styled from 'styled-components';

export const Container = styled.div`
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: var(--bg-1);

	& > h1 {
		font-size: 160px;
		font-weight: 500;
		margin-bottom: 12px;
		color: var(--purple);
	}

	& > p {
		font-size: 24px;
		font-weight: 400;
		color: var(--body-1);
	}
`;
