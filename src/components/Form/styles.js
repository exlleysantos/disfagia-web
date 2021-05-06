import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

export const InputContainer = styled.div`
	grid-column: span ${({ size }) => size || 1};
	display: flex;
	flex-direction: column;
	position: relative;

	& svg.pass-icon {
		position: absolute;
		top: 19px;
		right: 12px;
		transform: translateY(-50%);
		font-size: 20px;
		color: var(--heading-1);
		opacity: 0.5;
		cursor: pointer;
		transition: 300ms;

		&:hover {
			opacity: 0.8;
		}
	}

	& .react-select__control {
		height: 38px;
		border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--gray-2)')};

		& * {
			color: ${({ error }) => (error ? 'var(--red)' : 'var(--body-1)')} !important;
		}

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--navy)')};
		}
	}

	& .css-1pahdxg-control {
		box-shadow: 0 0 0 ${({ error }) => (error ? 'var(--red)' : 'var(--navy)')} !important;
	}

	& > input,
	textarea {
		border-radius: 5px;
		width: 100%;
		border: 1px solid var(--gray-2);
		padding: 4px 8px;
		font-size: 15px;
		height: ${({ isTextArea }) => (isTextArea ? 'max-content' : '38px')};
		transition: border-color 150ms;
		color: var(--body-1);
		transition: 300ms;
		background: transparent;

		&::placeholder {
			color: var(--body-1);
			font-size: 14px;
		}

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--gray-2)')};
		}

		&:focus {
			border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--navy)')};
			box-shadow: 0px 0px 1px 1px ${({ error }) => (error ? 'var(--red)' : 'var(--navy)')};
		}
	}

	& > textarea {
		max-width: max-content;
		min-width: 100%;
		min-height: 38px;
		font-family: 'Roboto', sans-serif;
		padding: 8px;

		&::placeholder {
			font-size: 15px;
			color: var(--body-2);
			opacity: 0.9;
		}
	}

	& > label {
		font-size: 14px;
		margin-bottom: 2px;
		color: var(--heading-1);
		font-weight: 700;
		transition: color 150ms;
	}

	${({ error }) =>
		error &&
		css`
			& > input,
			textarea {
				border-color: var(--red);

				&::placeholder {
					color: var(--red);
				}
			}

			& > label {
				color: var(--red);
			}
		`}
`;

export const CheckboxContainer = styled.div`
	grid-column: span ${({ size }) => size || 1};
	display: inline-block;


	& > div {
		display: flex;
		align-items: center;
		vertical-align: middle;

		& > input {
			width: 0;
			height: 0;
			visibility: hidden;
		}

		& > span.check {
			position: relative;
			cursor: pointer;
			display: flex;
			align-items: left;
			justify-content: start;

			& > svg {
				color: var(--navy);
				font-size: 20px;
				z-index: 0;
			}

			&:hover {
				&::after {
					opacity: 1;
				}
			}
		}

		& label {
			font-size: 16px;
			margin-left: 10px;
			color: var(--heading-1);
			font-weight: 500;
			vertical-align: middle;
		}
	}
`;

export const Switch = styled.div`
	width: 44px;
	height: 26px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ checked }) => (checked ? 'var(--purple)' : 'var(--gray-2)')};
	border-radius: var(--border-radius-3);
	position: relative;
	cursor: pointer;
	background: ${({ checked }) => (checked ? 'var(--purple)' : 'var(--gray-2)')};

	${({ checked }) =>
		checked &&
		css`
			box-shadow: inset 0 0 1px 1px rgba(40, 40, 40, 0.1);
		`}

	& > span {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 2px;
		left: ${({ checked }) => (checked ? 'calc(100% - 22px)' : '2px')};
		background: var(--white);
		border-radius: 100%;
		transition: left 300ms;
		box-shadow: ${({ checked }) =>
			checked ? '0px 1px 1px 1px rgba(10, 10, 10, .2)' : '1px 1px 1px 1px rgba(5, 5, 5, .1)'};
	}
`;

export const LengthIndicator = styled.p`
	width: 100%;
	text-align: end;
	font-size: 14px;

	& > span {
		color: var(--body-2);

		${({ isFullFilled }) =>
			isFullFilled &&
			css`
				color: var(--red);
				font-weight: 500;
			`}
	}

	& > strong {
		font-weight: 500;
		color: var(--body-2);
	}
`;

export const FileInputContainer = styled.div`
	grid-column: span ${({ size }) => size || 1};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 1px dashed var(--gray-2);
	cursor: pointer;
	height: 90px;
	border-radius: 5px;
	transition: 300ms;

	&:hover {
		/* background: ${({ error }) => (error ? 'var(--red)' : 'var(--purple)')}; */
	}

	& > svg {
		font-size: 20px;
		color: var(--heading-1);
		opacity: 0.5;
		pointer-events: none;
		transition: 300ms;
	}

	& > label {
		font-size: 14px;
		margin-bottom: 2px;
		color: var(--heading-1);
		opacity: 0.5;
		font-weight: 700;
		transition: color 150ms;
		pointer-events: none;
	}

	& > input {
		width: 0;
		height: 0;
		top: 0;
		left: 0;
		opacity: 0;
		position: absolute;

		&:hover {
			border-color: ${({ error }) => (error ? 'var(--red)' : 'var(--gray-2)')};
		}

		&:focus {
			background: ${({ error }) => (error ? 'var(--red)' : 'var(--purple)')};
		}
	}

	${({ error }) =>
		error &&
		css`
			border-color: var(--red);

			& > label {
				color: var(--red);
			}

			& > svg {
				color: var(--red);
			}
		`}

	${({ showPreview }) =>
		showPreview &&
		css`
			height: max-content;
			max-width: max-content;
			border-radius: 100%;
			border: none;
			background: none;
		`}
`;

export const FileInputOverlay = styled.div`
	pointer-events: none;
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 100%;
	transform: translate(-50%, -50%);
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	background: rgba(0, 0, 0, 0.6);
	opacity: ${({ show }) => (show ? 1 : 0)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > span {
		font-size: 12px;
		font-weight: 500;
		color: var(--white);
	}

	& > svg {
		margin-bottom: 2px;
		color: var(--white);
		font-size: 24px;
	}
`;

export const StyledForm = styled(Unform)`
	width: 100%;
	display: grid;
	gap: 16px;
	grid-template-rows: auto;
	grid-template-columns: ${({ columns }) => columns || 'repeat(4, 1fr)'};
	position: relative;
`;

export const Error = styled.span`
	font-size: 11px;
	color: var(--red);
	font-weight: 500;
`;

export const RadioContainer = styled.div`
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	max-width: max-content;

	&:hover {
		& > div.input {
			border-color: var(--navy);
		}

		& > label {
			color: var(--navy);
			font-size: 16px;
		}
	}

	& > div.input {
		cursor: pointer;
		border: 1px solid var(--heading-1);
		border-radius: 100%;
		width: 24px;
		height: 24px;
		min-width: 24px;
		min-height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;

		& > .check {
			width: 16px;
			height: 16px;
			min-width: 16px;
			min-height: 16px;
			display: ${({ checked }) => (checked ? 'block' : 'none')};
			background: var(--navy);
			border-radius: 100%;
		}
	}

	& > label {
		cursor: pointer;
		font-size: 16px;
		font-weight: 400;
		color: var(--body-1);
		margin-left: 8px;
	}

	& input {
		width: 0;
		height: 0;
		pointer-events: none;
		visibility: hidden;
	}
`;
export const RadioGroup = styled.div`
	display: flex;
	flex-direction: row;
	grid-column: span ${({ size }) => size || 1};

	& > label {
		font-size: 18px;
		color: var(--heading-1);
		font-weight: 500;
		margin-bottom: 4px;
	}

	& > div {
		display: flex;
		flex-direction: column;
	}
`;

export const collapseTheme = {
	collapse: 'ReactCollapse--collapse',
	content: 'ReactCollapse--content',
};
