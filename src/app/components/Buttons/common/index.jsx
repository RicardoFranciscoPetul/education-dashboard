import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import Button from '@material-ui/core/Button';
import Loading from '../../Loading';

const useStyles = makeStyles(theme => ({
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
}));

const CustomButton = ({ disabled, showLoad, ...props }) => {
	const classes = useStyles();
	const [success, setSuccess] = React.useState(false);

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	useEffect(() => {
		if (!disabled) {
			setSuccess(false);
		} else {
			setSuccess(true);
		}
	}, [disabled]);

	if (disabled && showLoad)
		return (
			<div className={classes.wrapper}>
				<Button
					{...props}
					className={buttonClassname}
					disabled={disabled}>
					{props.children}
				</Button>
				{disabled && showLoad && (
					<Loading size={24} className={classes.buttonProgress} />
				)}
			</div>
		);
	return (
		<Button {...props} disabled={disabled}>
			{props.children}
		</Button>
	);
};

export default CustomButton;
