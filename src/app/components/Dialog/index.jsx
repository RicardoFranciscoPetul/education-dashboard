import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
}));

const ResponsiveDialog = ({ isOpen, onClose, ...props }) => {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
	return (
		<Dialog
			className={classes.wrapper}
			fullScreen={fullScreen}
			open={isOpen}
			fullWidth={true}
			onClose={onClose}
			maxWidth='sm'
			aria-labelledby='responsive-dialog-title'>
			{props.children}
		</Dialog>
	);
};

export default ResponsiveDialog;
