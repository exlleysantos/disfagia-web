import React from 'react';

import { RadioContainer, RadioGroup } from './styles';

const Input = ({ checked, label, ...rest }) => {
	return (
		<RadioContainer {...rest}>
			<div className='input'>
				<div className='check'></div>
			</div>

			<label>{label}</label>

			<input />
		</RadioContainer>
	);
};

const Group = ({ title, size, children, ...rest }) => {
	const [value, setValue] = React.useState('1');

	return (
		<RadioGroup size={size}>
			<label>{title}</label>
			<div onClick={console.log(value)} onChange= {setValue} value={value}>{children}</div>
		</RadioGroup>
	);
};

export default { Input, Group };
