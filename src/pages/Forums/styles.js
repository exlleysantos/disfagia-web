import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Forum = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 24px 0;

	& > header {
		width: 100%;
		flex-direction: column;
		display: flex;
		margin-bottom: 16px;

		& h3 {
			color: #6d6d6d;
			font-weight: 500;
		}

		& > div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			& > .btn-compact {
				display: none;
			}

			@media (max-width: 512px) {
				& > .btn {
					display: none;
				}

				& > .btn-compact {
					display: flex;
				}
			}
		}

		& > p {
			text-transform: uppercase;
			font-size: 12px;
			color: var(--heading-1);
			font-weight: 500;
		}
	}

	& > div {
		display: flex;
		flex-direction: column;

		& > div.button {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 16px;
		}
	}
`;

export const Tag = styled.div`
	background: #c4c4c4;
	font-size: 13px;
	color: var(--heading-1);
	border-radius: 4px;
	padding: 4px 8px;
	margin-right: 12px;
`;

export const BoxContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-size: 13px;
		font-weight: 400;
		color: var(--body-1);
	}

	& > div {
		display: flex;

		& > p {
			font-size: 15px;
			color: var(--body-1);
		}
	}
`;
