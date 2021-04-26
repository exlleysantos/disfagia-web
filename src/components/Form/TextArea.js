import './collapse.css';

import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Collapse } from 'react-collapse';

import { InputContainer, Error, collapseTheme, LengthIndicator } from './styles';

export default function TextArea({
	name,
	label,
	size,
	type = 'text',
	rows,
	maxLength = null,
	...rest
}) {
	const [length, setLength] = useState(0);
	const [isFullFilled, setIsFullFilled] = useState(false);

	const textAreaRef = useRef(null);
	const { fieldName, defaultValue, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textAreaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	useEffect(() => {
		if (maxLength > 0 && length === maxLength) {
			setIsFullFilled(true);
		}

		if (maxLength > 0 && isFullFilled) {
			setIsFullFilled(false);
		}
	}, [length, maxLength, isFullFilled]);

	return (
		<InputContainer
			isTextArea
			{...rest}
			size={size}
			error={error}
			className={`__input ${rest.className}`}>
			{label && (
				<label onClick={() => console.log(maxLength)} htmlFor={name}>
					{label}
				</label>
			)}
			<textarea
				defaultValue={defaultValue}
				maxLength={maxLength && maxLength}
				ref={textAreaRef}
				rows={rows}
				onChange={(e) => {
					if (rest.onChange) {
						rest.onChange(e);
					}

					setLength(e.target.value.length);
				}}
				{...rest}></textarea>
			<Collapse isOpened={!!error} theme={collapseTheme}>
				<Error>{error}</Error>
			</Collapse>

			{maxLength > 0 && (
				<LengthIndicator isFullFilled={isFullFilled}>
					<span>{length}</span>/<strong>{maxLength}</strong>
				</LengthIndicator>
			)}
		</InputContainer>
	);
}
