import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Actions from './Actions';
import Typography from '../../components/Typography';

export default function DataTable({ rows, ...props }) {
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
						/>
					);
				},
			};
			setColumns([...props.columns, actions]);
		}
	}, [props.columns, anchorEls, props.editAction]);

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
