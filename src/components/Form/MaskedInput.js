import './collapse.css';

import React, { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { InputContainer, Error, collapseTheme } from './styles';

const MaskedInput = ({ size, help = '', mask, maskChar = '_', label, name, disabled, ...rest }) => {
	const maskedInputRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: maskedInputRef.current,
			path: 'value',
			setValue(ref, value) {
				ref.setInputValue('');
			},
			clearValue(ref) {
				ref.setInputValue('');
			},
		});
	}, [fieldName, registerField]);

	return (
		<InputContainer {...rest} size={size} error={error} className='__input'>
			{label && <label htmlFor={name}>{label}</label>}

			<InputMask
				{...rest}
				ref={maskedInputRef}
				disabled={disabled}
				defaultValue={defaultValue}
				className='masked-input'
				mask={mask}
				maskChar={maskChar}
				autoComplete='off'
			/>

			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>
		</InputContainer>
	);
};

export default MaskedInput;
