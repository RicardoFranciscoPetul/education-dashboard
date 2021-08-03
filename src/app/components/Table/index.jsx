import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Actions from './Actions';
import Typography from '../../components/Typography';

export default function DataTable({ rows, ...props }) {
	const [columns, setColumns] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const [current, setCurrent] = useState({});
	const open = Boolean(anchorEl);

	const handleClick = (event, params) => {
		setCurrent(params);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
							handleClick={e => handleClick(e, params)}
							handleClose={handleClose}
							anchorEl={anchorEl}
							open={open}
							data={current}
							editAction={props.editAction}
							dataType={props.dataType}
						/>
					);
				},
			};
			setColumns([...props.columns, actions]);
		}
	}, [
		props.columns,
		anchorEl,
		open,
		current,
		props.dataType,
		props.editAction,
	]);

	if (rows?.length < 1)
		return <Typography variant='subtitle1'>{props.emptyText}</Typography>;
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				disableSelectionOnClick
			/>
		</div>
	);
}
