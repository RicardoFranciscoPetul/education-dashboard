import React, { useEffect, useState } from 'react';
import { Typography, Alert } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {
	getCourseEditAction,
	getCoursesAction,
} from '../state/courses/actions';
import {
	CoursesForm,
	Dialog,
	FloatButton,
	Loading,
	Table,
} from '../components';
import { DASH_ROUTES } from '../constants/navigation';

const Courses = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [open, setOpen] = useState(false);

	const { courses, error, loading } = useSelector(state => state.courses);

	useEffect(() => {
		const getCourses = () => dispatch(getCoursesAction());
		getCourses();
	}, []);

	const editCourse = course => {
		dispatch(getCourseEditAction(course.row));
		history.push(`${DASH_ROUTES.COURSES}/editar/${course.id}`);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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

	if (loading) return <Loading />;

	return (
		<>
			<Typography variant='h4' gutterBottom>
				Tus cursos
			</Typography>
			<Table
				dataType='courses'
				rows={courses}
				columns={columns}
				editAction={editCourse}
				emptyText='Aún no cuentas con cursos, agrega uno para comenzar.'
			/>
			<FloatButton onClick={handleClickOpen} />
			<Dialog isOpen={open} onClose={handleClose}>
				<CoursesForm title='Agrega un nuevo curso' secondAction={handleClose}/>
			</Dialog>
			{error && (
				<Alert
					isOpen={true}
					message='Ocurrio un error y no se completo la solicitud'
				/>
			)}
		</>
	);
};

export default Courses;
