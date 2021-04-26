import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--bg-1);

	@media (max-width: 645px) {
		background: var(--bg-2);
	}
`;

export const FormContainer = styled.div`
	border-radius: 4px;
	border: 1px solid var(--gray-3);
	background: var(--bg-2);
	padding: 48px 112px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 600px;
	max-width: 90vw;

	& form {
		width: 100%;
		margin-top: 16px;
	}

	@media (max-width: 645px) {
		padding: 48px 64px;
		border: none;
		border-radius: 0;
	}

	@media (max-width: 512px) {
		padding: 48px 32px;
		border: none;
		border-radius: 0;
	}

	@media (max-width: 380px) {
		padding: 32px 12px;
		border: none;
		border-radius: 0;
	}
`;

export const Title = styled.h1`
	color: var(--heading-1);
	font-size: 30px;

	& > span {
		color: var(--purple);
	}
`;

export const SubTitle = styled.span`
	margin-bottom: 32px;
	text-align: center;
`;

export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	& > p {
		font-size: 26px;
		color: var(--heading-1);
		font-weight: 500;
	}

	& > span {
		font-size: 20px;
		color: var(--body-1);
		margin-bottom: 12px;
	}
`;
