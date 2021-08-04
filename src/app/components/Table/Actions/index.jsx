import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '../../Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { StyledMenuItem } from './styles';
import Button from '../../Buttons/common';

const Actions = ({ handleClick, handleClose, anchorEl, open, ...props }) => {
	const handleEdit = () => {
		handleClose();
		props?.editAction(props.data);
	};
	return (
		<Fragment>
			<IconButton
				aria-label='more'
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}>
				{props.customActions?.length > 0 &&
					props.customActions.map((action, index) => (
						<StyledMenuItem
							key={index}
							onClick={() => action.onClick(props.data)}
							>
							<ListItemIcon>
								<EditIcon fontSize='small' />
							</ListItemIcon>
							<ListItemText primary={action.text} />
						</StyledMenuItem>
					))}
				<StyledMenuItem onClick={handleEdit}>
					<ListItemIcon>
						<EditIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary='Editar' />
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose}>
					<ListItemIcon>
						<DeleteIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary='Eliminar' />
				</StyledMenuItem>
			</Menu>
		</Fragment>
	);
};

export default Actions;
