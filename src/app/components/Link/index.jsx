import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
}));

const CustomLink = props => {
	const classes = useStyles();
	return (
		<Link
			{...props}
			className={`${classes.link} ${
				props.className ? props.className : ''
			}`}>
			{props.children}
		</Link>
	);
};

export default CustomLink;
