import React, { Fragment, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Actions from './Actions';
import Typography from '../../components/Typography';
import Button from '../Buttons/common';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import Loading from '../Loading';

const useStyles = makeStyles(theme => ({
	mainContent: {
		height: 400,
		width: '100%',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	buttonAdd: {
		margin: theme.spacing(1, 0),
		textTransform: 'none',
	},
}));

export default function DataTable({ rows, onClick, mainLoading, ...props }) {
	const classes = useStyles();
	const [columns, setColumns] = useState([]);
	const [anchorEls, setAnchorEls] = useState([]);

	const handleActionClick = (id, event) => {
		let anchorElCopy = [...anchorEls];
		anchorElCopy[id] = event.target;
		setAnchorEls(anchorElCopy);
	};

	const handleActionClose = id => {
		let anchorElCopy = [...anchorEls];
		anchorElCopy[id] = null;
		setAnchorEls(anchorElCopy);
	};

	useEffect(() => {
		if (props.columns?.length > 0) {
			let actions = {
				field: 'actions',
				headerName: 'Acciones',
				sortable: false,
				width: 140,
				disableClickEventBubbling: true,
				renderCell: params => {
					return (
						<Actions
							handleClick={e => handleActionClick(params.id, e)}
							handleClose={e => handleActionClose(params.id, e)}
							anchorEl={anchorEls[params.id]}
							open={Boolean(anchorEls[params.id])}
							data={params}
							editAction={props.editAction}
							deleteAction={props.deleteAction}
							customActions={props.customActions}
						/>
					);
				},
			};
			setColumns([...props.columns, actions]);
		}
	}, [props.columns, anchorEls, props.editAction]);

	if (mainLoading) return <Loading />;

	return (
		<div className={classes.mainContent}>
			{rows?.length < 1 && (
				<Typography variant='subtitle1'>{props.emptyText}</Typography>
			)}
			{onClick && (
				<div className={classes.buttonContainer}>
					<Button
						onClick={onClick}
						size='small'
						startIcon={<AddIcon />}
						className={classes.buttonAdd}>
						{`Agregar ${props.dataType ? props.dataType : ''}`}
					</Button>
				</div>
			)}
			{rows.length > 0 && (
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={columns.length > 4 ? 5 : columns.length}
					disableSelectionOnClick
				/>
			)}
		</div>
	);
}
