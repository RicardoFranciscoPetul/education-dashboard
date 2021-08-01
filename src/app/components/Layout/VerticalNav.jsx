import React from 'react';
import Icon from '@material-ui/core/Icon';
import {
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
}))

const VerticalNav = ({ navigation }) => {
	const classes = useStyles();
	return (
		<List>
			{navigation.map((route, index) => (
				<Link to={route.path} className={classes.link} key={index}>
					<ListItem button key={index}>
						<ListItemIcon>
							{route.icon ? (
								<Icon>{route.icon.toLowerCase()}</Icon>
							) : (
								<Typography variant='h5'>
									{route.iconText}
								</Typography>
							)}
						</ListItemIcon>
						<ListItemText primary={route.name} />
					</ListItem>
				</Link>
			))}
		</List>
	);
};

export default VerticalNav;
