import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '../Typography';

const useStyles = makeStyles(theme => ({
	container: {
		margin: 'auto',
	},
	root: {
		'& > *': {
			margin: theme.spacing(1, 0),
		},
	},
}));

const FormLayout = ({ children, ...props }) => {
	const classes = useStyles();
	return (
		<Grid item xs={10} lg={8} className={classes.container}>
			<form className={classes.root} onSubmit={props.onSubmit}>
				<Fragment>
					{props.title && (
						<Typography variant='h5' align='center'>
							{props.title}
						</Typography>
					)}
					{children}
				</Fragment>
			</form>
		</Grid>
	);
};

export default FormLayout;
