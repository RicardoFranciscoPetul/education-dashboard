import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Alert } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {
	getChaptersAction,
	getChapterEditAction,
	deleteChapterAction,
} from '../state/chapters/actions';

import { ChapterForm, Dialog, Loading, Table } from '../components';

const Chapters = () => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);

	const { chapters, error, loading, chapterEdit } = useSelector(
		state => state.chapters
	);

	useEffect(() => {
		const getChapters = () => dispatch(getChaptersAction());
		getChapters();
	}, []);

	const deleteLesson = id => dispatch(deleteChapterAction(id));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setEdition(false);
	};

	const editChapter = course => {
		dispatch(getChapterEditAction(course.row));
		setEdition(true);
		handleClickOpen();
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
			width: 300,
		},
		{
			field: 'urlVideo',
			headerName: 'Video',
			width: 300,
		},
	];
	if (loading) return <Loading />;
	return (
		<Fragment>
			<Typography variant='h4' gutterBottom>
				Todos los capitulos
			</Typography>
			<Table
				rows={chapters}
				columns={columns}
				editAction={editChapter}
				deleteAction={deleteLesson}
				emptyText='Aún no cuentas con capitulos, agrega uno para comenzar.'
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<ChapterForm
					initialData={isEdition ? chapterEdit : null}
					title='Editar capitulo'
					secondAction={handleClose}
					isEdition={true}
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

export default Chapters;
