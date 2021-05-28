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