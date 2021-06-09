import styled from 'styled-components';

export const MainInfos = styled.div`
	width: 100%;
	display: flex;

	& > div.infos {
		flex: 1;
		width: 100%;
		min-height: 150px;
		margin-left: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		& > div.row {
			/* border: 1px solid blue; */
			width: 100%;
			max-width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			& > * {
				margin-right: 8px;
			}
		}
	}

	@media (max-width: 645px) {
		& div.row {
			margin-bottom: 12px;
		}

		& div.row:nth-child(3) {
			display: none !important;
		}
	}
`;

export const MobileFooter = styled.div`
	width: 100%;
	flex-direction: column;
	display: none;
	margin-top: 12px;

	& > div.buttons {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;

		& > button {
			width: 49%;
		}
	}

	@media (max-width: 645px) {
		display: flex;
	}
`;

export const Name = styled.h3`
	color: var(--heading-1);
	font-size: 24px;
`;

export const Nickname = styled.span`
	font-size: 15px;
	color: var(--body-1);
	transform: translateY(-12px);
`;

export const Tag = styled.div`
	font-size: 15px;
	padding: 4px 16px;
	background: var(--green-marine);
	color: var(--green-forest);
	border-radius: 5px;
`;

export const InstitutionName = styled.span`
	font-size: 13px;
	color: var(--body-1);
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
