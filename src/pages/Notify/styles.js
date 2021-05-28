import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	& > header {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
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

export const ModalContent = styled.div`
	width: 500px;
	background: #fff;
	border-radius: 8px;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
		rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	& > header {
		width: 100%;
		border-radius: 8px 8px 0 0;
		padding: 12px;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		& > button {
			background: none;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 100%;
			width: 30px;
			height: 30px;
			cursor: pointer;
			&:hover {
				background: #dedede;
			}
			& > svg {
				font-size: 22px;
				color: var(--body-1);
			}
		}
	}
	& > div {
		padding: 24px;
	}
`;

export const Feed = styled.ul`
	width: 100%;
	margin-top: 24px;
	& > li {
		margin-bottom: 12px;
	}
`;

export const Tag = styled.div`
	background: #c4c4c4;
	font-size: 13px;
	color: var(--heading-1);
	border-radius: 4px;
	padding: 4px 8px;
	margin-right: 12px;
	display: flex;
	align-items: center;
	& > svg {
		font-size: 18px;
		margin-right: 4px;
	}
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
