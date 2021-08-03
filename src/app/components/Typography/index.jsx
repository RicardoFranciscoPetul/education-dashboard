import React from 'react';
import { Typography } from '@material-ui/core';

const CustomTypography = ({ children, ...props }) => {
	return <Typography {...props}>{children}</Typography>;
};

export default CustomTypography;
