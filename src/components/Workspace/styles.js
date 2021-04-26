import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: var(--bg-1);
	display: flex;
	flex-direction: column;

	& > div.content {
		height: 100%;
		overflow-y: auto;
		padding: 32px;

		@media (max-width: 768px) {
			padding: 24px;
		}

		@media (max-width: 512px) {
			padding: 24px 12px;
		}

		@media (max-width: 415px) {
			padding: 24px 8px;
		}
	}
`;
