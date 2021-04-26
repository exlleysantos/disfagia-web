import React from 'react';

import { Container } from './styles';

const Box = ({ children, ...rest }) => <Container className='__box' {...rest}>{children}</Container>;

export default Box;
