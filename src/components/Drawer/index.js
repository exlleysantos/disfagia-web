import React, { useState, useEffect } from 'react';

import { Container, Overlay } from './styles';

const Drawer = ({ visible, children, onClose, ...rest }) => {
	const [showDrawer, setShowDrawer] = useState(visible);
	const [showOverlay, setShowOverlay] = useState(visible);

	useEffect(() => {
		setShowDrawer(visible);

		if (visible) {
			setTimeout(() => {
				setShowOverlay(true);
			}, 120);
		} else {
			setShowOverlay(false);
		}
	}, [visible]);

	const closeDrawer = () => {
		if (onClose && typeof onClose === 'function') {
			onClose();
		}

		setShowOverlay(false);
		setShowDrawer(false);
	};

	return (
		<Container visible={showDrawer} {...rest}>
			{visible && (
				<>
					{children}
					<Overlay visible={showOverlay} onClick={closeDrawer} />
					<button onClick={closeDrawer}>X</button>
				</>
			)}
		</Container>
	);
};

export default Drawer;
