import React, { forwardRef } from 'react';
import { StyledForm } from './styles';

const Form = ({ columns, children, ...rest }, ref) => {
	return (
		<StyledForm ref={ref} columns={columns} {...rest}>
			{children}
		</StyledForm>
	);
};

export default forwardRef(Form);
