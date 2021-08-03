import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

const FloatButton = ({ label, className, color, icon, ...props }) => {
	const classes = useStyles();
	return (
		<Fab
			{...props}
			aria-label={label}
			className={className || classes.fab}
			color={color}>
			{icon}
		</Fab>
	);
};

FloatButton.propTypes = {
	label: PropTypes.string,
	className: PropTypes.object,
	color: PropTypes.string,
	icon: PropTypes.element,
};

FloatButton.defaultProps = {
	label: 'Agregar',
	color: 'primary',
	icon: <AddIcon />,
};

export default FloatButton;
