import './collapse.css';

import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { InputContainer, Error, collapseTheme } from './styles';

const Select = ({ name, label, size, placeholder, ...rest }) => {
	const selectRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: selectRef.current,
			path: 'state.value',
			getValue: (ref) => {
				if (rest.isMulti) {
					if (!ref.state.value) {
						return [];
					}

					return ref.state.value.map((option) => option.value);
				} else {
					if (!ref.state.value) {
						return '';
					}

					return ref.state.value.value;
				}
			},
		});
	}, [fieldName, registerField, rest.isMulti]);

	return (
		<InputContainer {...rest} size={size} error={error} className='__input'>
			{label && <label htmlFor={name}>{label}</label>}
			<ReactSelect
				{...rest}
				defaultValue={rest.options.filter((option) => option.value === defaultValue)[0]}
				ref={selectRef}
				classNamePrefix='react-select'
				placeholder={placeholder || 'Selecione'}
			/>
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>
		</InputContainer>
	);
};
export default Select;
