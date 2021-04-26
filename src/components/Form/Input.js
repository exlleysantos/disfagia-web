import './collapse.css';

import React, { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { InputContainer, Error, collapseTheme } from './styles';

export default function Input({ name, label, size, type = 'text', ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	const [inputType, setInputType] = useState(type);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	const handleShowPassword = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};

	return (
		<InputContainer {...rest} size={size} error={error} className='__input'>
			{label && <label htmlFor={name}>{label}</label>}
			<input ref={inputRef} type={inputType} defaultValue={defaultValue} {...rest} />
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>

			{type === 'password' && inputType === 'password' && (
				<AiOutlineEye className='pass-icon' onClick={handleShowPassword} />
			)}

			{type === 'password' && inputType === 'text' && (
				<AiOutlineEyeInvisible className='pass-icon' onClick={handleShowPassword} />
			)}
		</InputContainer>
	);
}
