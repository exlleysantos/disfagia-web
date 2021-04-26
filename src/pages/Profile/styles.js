import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const BioInfos = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	& > div {
		display: flex;
		flex-direction: column;

		& > header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 4px;

			& > h3 {
				font-size: 17px;
				text-transform: uppercase;
				color: var(--heading-1);
			}

			& > button {
				font-size: 17px;
				text-transform: uppercase;
				color: var(--body-1);
				border: none;
				background: none;
				padding: 8px 16px;
				border-radius: 5px;
				cursor: pointer;
				transition: background-color 300ms;
				font-weight: 500;

				&:hover {
					color: var(--purple);
					background: var(--purple-opacity);
				}
			}
		}

		& > p {
			font-size: 14px;
			color: var(--body-1);
		}
	}

	& > div ~ div {
		margin-top: 16px;
	}
`;
