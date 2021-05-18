import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	height: 100%;
	padding: 32px;
	background: var(--bg-1);

	@media (max-width: 645px) {
		background: var(--bg-2);
		padding: 32px 12px;

		& h1 {
			text-align: center;
		}
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 32px;

	& form {
		width: 100%;
		margin-top: 16px;

		& > section {
			grid-column: span 4;
			display: flex;
			flex-direction: column;

			& > h3 {
				font-size: 17px;
				color: var(--body-1);
				margin: 12px 0;
			}

			& > div.__box {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 12px;
			}

			@media (max-width: 645px) {
				& > h3 {
					text-align: center;
				}
			}
		}
	}

	@media (max-width: 645px) {
		border: none;
		border-radius: 0;
	}

	@media (max-width: 512px) {
		border: none;
		border-radius: 0;

		& .__input {
			grid-column: span 2;
		}
	}

	@media (max-width: 380px) {
		border: none;
		border-radius: 0;
	}
`;

export const Subjects = styled.div`
	grid-column: span 2;
	display: grid;
	grid-template-columns: auto 66px;
	gap: 8px;
	padding: 12px 0;

	& > h3 {
		grid-column: span 2;
		font-size: 17px;
		color: var(--heading-2);
		opacity: 0.8;
		margin-bottom: 8px;
	}

	@media (max-width: 512px) {
		border: none;
		border-radius: 0;

		& .__input {
			grid-column: span 1;
		}
	}

	& button {
		max-width: 36px !important;

		& svg {
			margin: 0;
		}
	}

	& > ul {
		padding: 4px 12px;
		grid-column: span 2;
		background: #c4c4c4;

		& > li.empty {
			text-align: center;
		}
	}
`;

export const Subject = styled.li`
	display: grid;
	grid-template-columns: auto 66px;
	gap: 0 4px;
	margin: 8px 0;
	padding: 4px;
	background: var(--white);
	border-radius: 5px;
	align-items: center;

	& > span {
		font-size: 15px;
		color: var(--body-1);
		font-weight: 500;
	}

	& button {
		max-width: 36px !important;
		max-height: 30px !important;
	}
`;

export const Title = styled.h1`
	color: var(--heading-1);
	font-size: 30px;
	margin-bottom: 24px;
	text-align: center;
	width: 100%;

	& > span {
		color: var(--purple);
	}
`;

export const AvatarText = styled.div`
	grid-column: span 2;
	margin-top: 5px;

	& > h3 {
		font-size: 17px;
		color: var(--heading-2);
		opacity: 0.8;
	}

	& > span {
		color: var(--body-1);
		font-size: 14px;
	}
`;
