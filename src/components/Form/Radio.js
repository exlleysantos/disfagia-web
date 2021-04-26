import React from 'react';

import { RadioContainer, RadioGroup } from './styles';

const Input = ({ checked, label, ...rest }) => {
	return (
		<RadioContainer checked={checked} {...rest}>
			<div className='input'>
				<div className='check'></div>
			</div>

			<label>{label}</label>

			<input />
		</RadioContainer>
	);
};

const Group = ({ title, size, children, ...rest }) => {
	return (
		<RadioGroup size={size}>
			<label>{title}</label>
			<div>{children}</div>
		</RadioGroup>
	);
};

export default { Input, Group };
