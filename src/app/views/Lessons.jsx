import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Alert } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {
	getLessonsAction,
	getLessonEditAction,
	deleteLessonAction,
} from '../state/lessons/actions';

import { LessonsForm, Dialog, Table } from '../components';

const Lessons = () => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);

	const { lessons, error, loading, lessonEdit } = useSelector(
		state => state.lessons
	);

	const deleteLesson = id => dispatch(deleteLessonAction(id));

	useEffect(() => {
		const getAllLessons = () => dispatch(getLessonsAction());
		getAllLessons();
	}, []);

	const editCourse = course => {
		dispatch(getLessonEditAction(course.row));
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
				Todas las clases
			</Typography>

			<Table
				dataType='clase'
				mainLoading={loading}
				onClick={handleClickOpen}
				rows={lessons}
				columns={columns}
				editAction={editCourse}
				deleteAction={deleteLesson}
				emptyText='Aún no cuentas con clases, agrega una para comenzar.'
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<LessonsForm
					initialData={isEdition ? lessonEdit : null}
					title={
						isEdition ? 'Editar clase' : 'Agrega una nueva clase'
					}
					secondAction={handleClose}
					isEdition={isEdition}
				/>
			</Dialog>
			{error && (
				<Alert
					isOpen={true}
					message='Ocurrio un error y no se obtubieron las clases'
				/>
			)}
		</Fragment>
	);
};

export default Lessons;
