import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	& > form {
		margin: 24px 0;
	}
`;

export const SubtitleContainer = styled.div`
	width: 100%fit-content;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;

	& > span {
		font-size: 13px;
		color: var(--body-1);
		font-weight: 500;
		opacity: 0.8;
	}
`;

export const EducatorsList = styled.ul`
	width: 100%;

	& > li ~ li {
		margin-top: 16px;
	}
`;

export const buttonStyle = { background: '#303030', borderColor: '#303030' };
