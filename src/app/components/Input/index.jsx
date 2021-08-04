import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = ({...props}) => {
	return (
		<TextField {...props}  />
	);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool.isRequired
};

Input.defaultProps = {
    label: 'Tu etiqueta',
	fullWidth: true
};

export default Input;
