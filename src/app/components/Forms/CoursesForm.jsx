import React from 'react';
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

const validationSchema = yup.object({
	titulo: validations.titulo,
	descripcion: validations.descripcion,
});

const CoursesForm = ({ title, action, initialData, ...props }) => {
	const dispatch = useDispatch();
	const { error, addLoading, edited } = useSelector(state => state.courses);

	const addCourse = course => dispatch(addCourseAction(course));
	const editCourse = course => dispatch(editCourseAction(course));
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
			if (!action || action !== 'edit') {
				values.id = uuidv4();
				addCourse(values);
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
				action={action}
				secondAction={props.secondAction}
				isLoading={addLoading}
			/>
			{!error && !addLoading && edited && (
				<Alert
					severity='success'
					isOpen={true}
					message='Curso actualizado'
				/>
			)}
		</FormLayout>
	);
};

export default CoursesForm;
