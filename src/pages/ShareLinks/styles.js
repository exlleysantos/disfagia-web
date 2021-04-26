import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	& > div.__box > h1 {
		margin-bottom: 24px;
	}

	& form {
		& > h3 {
			grid-column: span 4;
		}

		& > button {
			grid-column: 3/5;
		}
	}

	@media (max-width: 645px) {
		& form {
			grid-template-columns: repeat(2, 1fr) !important;

			& > * {
				grid-column: span 2 !important;
			}
		}
	}
`;
