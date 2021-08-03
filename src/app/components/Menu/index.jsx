import React from 'react';
import Menu from '@material-ui/core/Menu';

const CustomMenu = ({ ...props }) => {
	return (
		<Menu {...props} id='simple-menu'>
			{props.children}
		</Menu>
	);
};

export default CustomMenu;
