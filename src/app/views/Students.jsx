import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert, Dialog, StudentsForm, Table, Typography } from '../components';
import {
	getStudentEditAction,
	getStudentsAction,
} from '../state/students/actions';

const Students = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [isEdition, setEdition] = useState(false);

	const { students, loading, error, studentEdit } = useSelector(
		state => state.students
	);

	const getStudents = id => dispatch(getStudentsAction(id));

	useEffect(() => {
		console.log(id);
		getStudents(id);
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setEdition(false);
	};

	const editCourse = student => {
		dispatch(getStudentEditAction(student.row));
		setEdition(true);
		handleClickOpen();
	};

	const columns = [
		{
			field: 'nombre',
			headerName: 'Nombre',
			width: 250,
		},
		{
			field: 'apellidoPaterno',
			headerName: 'Apellido Paterno',
			width: 200,
		},
		{
			field: 'apellidoMaterno',
			headerName: 'Apellido Materno',
			width: 200,
		},
		{
			field: 'fechaNacimiento',
			headerName: 'Fecha Nacimiento',
			width: 200,
		},
		{
			field: 'semestre',
			headerName: 'Semestre',
			width: 150,
		},
		{
			field: 'especialidad',
			headerName: 'Especialidad',
			width: 250,
		},
	];
	return (
		<Fragment>
			<Typography variant='h4' gutterBottom>
				{id ? `Alumnos del capitulo` : 'Todos los alumnos'}
			</Typography>
			<Table
				onlyRead={true}
				mainLoading={loading}
				rows={students}
				columns={columns}
				editAction={editCourse}
				emptyText='Aún no hay alumnos registrados en este capitulo'
			/>
			<Dialog isOpen={open} onClose={handleClose}>
				<StudentsForm
					onlyRead={true}
					initialData={isEdition ? studentEdit : null}
					title={isEdition ? 'Información del alumno' : ''}
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

export default Students;
