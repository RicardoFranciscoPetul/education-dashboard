import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { validations } from '../../constants';
import ContainedButtons from './ContainedButtons';
import { useSelector, useDispatch } from 'react-redux';
import { addLessonAction, editLessonAction } from '../../state/lessons/actions';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input';
import FormLayout from './Layout';
import Alert from '../Alert';

const validationSchema = yup.object({
	titulo: validations.titulo,
	descripcion: validations.descripcion,
});

const LessonsForm = ({ title, isEdition, initialData, ...props }) => {
	const dispatch = useDispatch();
	const { error, addLoading, edited } = useSelector(state => state.lessons);

	const addLesson = lesson => dispatch(addLessonAction(lesson));
	const editLesson = lesson => dispatch(editLessonAction(lesson));
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
			if (!isEdition && props.courseId) {
				values.id = uuidv4();
				values.cursoId = Number(props.courseId);
				addLesson(values);
			} else {
				editLesson(values);
			}
		},
	});

	return (
		<FormLayout title={title} onSubmit={formik.handleSubmit}>
			<Input
				name='titulo'
				label='Titulo de la clase'
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

export default LessonsForm;
