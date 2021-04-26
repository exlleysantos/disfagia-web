import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Options = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Option = styled.button`
	width: 100%;
	height: 130px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background: #dfdfdf;
	color: var(--heading-1);
	font-size: 24px;
	margin-top: 12px;
	border: none;
	cursor: pointer;

	& > svg {
		margin-right: 12px;
		font-size: 28px;
	}

	&:hover {
		background: #bfbfbf;
	}
`;
