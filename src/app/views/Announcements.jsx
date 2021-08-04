import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Alert } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import {
	getAnnouncementEditAction,
	getAnnouncementsAction,
	deleteAnnouncementAction,
} from '../state/announcements/actions';
import { AnnouncementsForm, Dialog, Table } from '../components';
import { useParams } from 'react-router-dom';

const Announcements = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);

	const { announcements, error, loading, announcementEdit } = useSelector(
		state => state.announcements
	);

	const deleteAnnouncement = id => dispatch(deleteAnnouncementAction(id));

	useEffect(() => {
		const getAnnouncements = id => dispatch(getAnnouncementsAction(id));
		getAnnouncements(id);
		dispatch(getAnnouncementEditAction(null));
	}, []);

	const editAnnouncement = announcement => {
		dispatch(getAnnouncementEditAction(announcement.row));
		setEdition(true);
		handleClickOpen();
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setEdition(false);
	};

	const columns = [
		{
			field: 'titulo',
			headerName: 'Titulo',
			width: 250,
		},
		{
			field: 'descripcion',
			headerName: 'Descripción',
			width: 500,
		},
	];

	return (
		<Fragment>
			<Typography variant='h4' gutterBottom>
				Anuncios de la clase
			</Typography>
			<Table
				dataType='anuncio'
				mainLoading={loading}
				rows={announcements}
				columns={columns}
				onClick={id ? handleClickOpen : null}
				deleteAction={deleteAnnouncement}
				editAction={editAnnouncement}
				emptyText='No hay anuncios para esta clase'
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<AnnouncementsForm
					parentId={id}
					initialData={isEdition ? announcementEdit : null}
					title={
						isEdition
							? 'Editar anuncio'
							: 'Agrega un nuevo anuncio a la clase'
					}
					secondAction={handleClose}
					isEdition={isEdition}
				/>
			</Dialog>
			{error && (
				<Alert
					isOpen={true}
					message='Ocurrio un error y no se completo la solicitud'
				/>
			)}
		</Fragment>
	);
};

export default Announcements;
