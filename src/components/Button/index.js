import React, { useRef } from 'react';
import Loader from 'react-loader-spinner';

import { Container, IconButtonContainer } from './styles';

const Button = ({ children, color, icon: Icon, isGhost, size, loading, disabled, ...rest }) => {
	const ref = useRef(null);

	const onClick = (e) => {
		if (loading || disabled) {
			return;
		}

		rest.onClick && rest.onClick(e);
	};

	return (
		<Container
			{...rest}
			ref={ref}
			disabled={disabled || loading}
			size={size}
			isGhost={isGhost}
			onClick={onClick}>
			{loading ? (
				<Loader
					type='TailSpin'
					color={isGhost ? '#8D45E8' : '#FFFFFF'}
					height={21}
					width={21}
					timeout={0}
					className='loader'
				/>
			) : (
				<>
					{Icon && <Icon className='icon' />} {children}
				</>
			)}
		</Container>
	);
};

const IconButton = ({ icon: Icon, color, isGhost, loading, disabled, ...rest }) => {
	const onClick = (e) => {
		if (loading || disabled) {
			return;
		}

		rest.onClick && rest.onClick(e);
	};

	return (
		<IconButtonContainer
			{...rest}
			isIconButton
			disabled={disabled || loading}
			isGhost={isGhost}
			onClick={onClick}>
			{loading ? (
				<Loader
					type='TailSpin'
					color={isGhost ? '#8D45E8' : '#FFFFFF'}
					height={21}
					width={21}
					timeout={0}
					className='loader'
				/>
			) : (
				<Icon />
			)}
		</IconButtonContainer>
	);
};

export { IconButton };
export default Button;
