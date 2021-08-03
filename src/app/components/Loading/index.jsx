import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ ...props }) => {
	return <CircularProgress {...props} />;
};

export default Loading;
