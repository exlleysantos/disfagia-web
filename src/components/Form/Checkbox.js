import './collapse.css';

import React, { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { CheckboxContainer, Error, collapseTheme, Switch } from './styles';

import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const Checkbox = ({ name, label, size, type = 'check', ...rest }) => {
	const checkboxRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	const [checked, setChecked] = useState(() => (defaultValue ? true : false));

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: checkboxRef.current,
			path: 'checked',
		});
	}, [fieldName, registerField]);

	const handleInputClick = () => {
		checkboxRef.current.click();
		setChecked(!checked);
	};

	return (
		<CheckboxContainer {...rest} size={size} error={error} className='__input'>
			<div>
				<input ref={checkboxRef} type='checkbox' defaultChecked={defaultValue} {...rest} />

				{type === 'check' ? (
					<span onClick={handleInputClick} className='check'>
						{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
					</span>
				) : (
					<Switch onClick={handleInputClick} checked={checked}>
						<span></span>
					</Switch>
				)}

				{label && <label htmlFor={name}>{label}</label>}
			</div>
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>
		</CheckboxContainer>
	);
};

export default Checkbox;
