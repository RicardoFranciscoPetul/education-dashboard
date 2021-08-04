import React from 'react';
import Icon from '@material-ui/core/Icon';
import {
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import Link from '../Link';

const VerticalNav = ({ navigation }) => {
	return (
		<List>
			{navigation.map((route, index) => (
				<Link to={route.path} key={index}>
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
