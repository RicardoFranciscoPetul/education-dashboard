import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { validations } from '../../constants';
import ContainedButtons from './ContainedButtons';
import { useSelector, useDispatch } from 'react-redux';
import { addCourseAction, editCourseAction } from '../../state/courses/actions';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input';
import FormLayout from './Layout';
import { Alert } from '..';
import { useHistory } from 'react-router-dom';
import { DASH_ROUTES } from '../../constants/navigation';

const validationSchema = yup.object({
	titulo: validations.titulo,
	descripcion: validations.descripcion,
});

const CoursesForm = ({ title, isEdition, initialData, ...props }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { error, addLoading, edited } = useSelector(state => state.courses);
	const [newId, setNewId] = useState(null);

	const addCourse = course => dispatch(addCourseAction(course));
	const editCourse = course => dispatch(editCourseAction(course));

	useEffect(() => {
		if (!error && !addLoading && edited && newId) {
			console.log('hola');
			history.push(`${DASH_ROUTES.COURSES}/editar/${newId}`);
		}
		console.log(error, addLoading, edited, newId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error, addLoading, edited, newId]);

	const initialValues = initialData
		? initialData
		: {
				titulo: '',
				descripcion: '',
		  };

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => {
			if (!isEdition) {
				values.id = uuidv4();
				addCourse(values);
				setNewId(values.id);
			} else {
				editCourse(values);
			}
		},
	});

	return (
		<FormLayout title={title} onSubmit={formik.handleSubmit}>
			<Input
				name='titulo'
				label='Titulo del curso'
				value={formik.values.titulo}
				onChange={formik.handleChange('titulo')}
				error={formik.touched.titulo && Boolean(formik.errors.titulo)}
				helperText={formik.touched.titulo && formik.errors.titulo}
			/>
			<Input
				name='descripcion'
				label='Descripción'
				value={formik.values.descripcion}
				onChange={formik.handleChange('descripcion')}
				error={
					formik.touched.descripcion &&
					Boolean(formik.errors.descripcion)
				}
				helperText={
					formik.touched.descripcion && formik.errors.descripcion
				}
			/>
			<ContainedButtons
				isEdition={isEdition}
				secondAction={props.secondAction}
				isLoading={addLoading}
			/>
			{edited && (
				<Alert
					severity='success'
					isOpen={true}
					message={isEdition ? 'Curso actualizado' : 'Curso creado'}
				/>
			)}
		</FormLayout>
	);
};

export default CoursesForm;
