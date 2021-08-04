import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Alert } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {
	getCourseEditAction,
	getCoursesAction,
} from '../state/courses/actions';
import { CoursesForm, Dialog, Table } from '../components';
import { DASH_ROUTES } from '../constants/navigation';

const Courses = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);

	const { courses, error, loading, courseEdit } = useSelector(
		state => state.courses
	);

	useEffect(() => {
		const getCourses = () => dispatch(getCoursesAction());
		getCourses();
	}, []);

	const editCourse = course => {
		dispatch(getCourseEditAction(course.row));
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

	const handleRedirect = ({ row }) => {
		history.push(`${DASH_ROUTES.COURSES}/editar/${row.id}`);
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

	const moreActions = [{ text: 'Clases', onClick: handleRedirect }];

	return (
		<Fragment>
			<Typography variant='h4' gutterBottom>
				Tus cursos
			</Typography>
			<Table
				dataType='curso'
				mainLoading={loading}
				rows={courses}
				columns={columns}
				onClick={handleClickOpen}
				editAction={editCourse}
				emptyText='Aún no cuentas con cursos, agrega uno para comenzar.'
				customActions={moreActions}
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<CoursesForm
					initialData={isEdition ? courseEdit : null}
					title={isEdition ? 'Editar curso' : 'Agrega un nuevo curso'}
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

export default Courses;
