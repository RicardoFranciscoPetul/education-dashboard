import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { validations } from '../../constants';
import ContainedButtons from './ContainedButtons';
import { useSelector, useDispatch } from 'react-redux';
import {
	addChapterAction,
	editChapterAction,
} from '../../state/chapters/actions';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input';
import FormLayout from './Layout';
import Alert from '../Alert';

const validationSchema = yup.object({
	titulo: validations.titulo,
	descripcion: validations.descripcion,
	urlVideo: validations.youtube,
});

const ChapterForm = ({ title, initialData, isEdition, ...props }) => {
	const dispatch = useDispatch();
	const { error, addLoading, edited } = useSelector(state => state.chapters);

	const addChapter = chapter => dispatch(addChapterAction(chapter));
	const editChapter = chapter => dispatch(editChapterAction(chapter));
	const initialValues = initialData
		? initialData
		: {
				titulo: '',
				descripcion: '',
				urlVideo: '',
		  };
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => {
			if (!isEdition && props.classId) {
				values.id = uuidv4();
				values.claseId = props.classId;
				addChapter(values);
			} else {
				editChapter(values);
			}
		},
	});
	return (
		<FormLayout title={title} onSubmit={formik.handleSubmit}>
			<Input
				name='titulo'
				label='Titulo del capitulo'
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
			<Input
				name='urlVideo'
				label='URL del video'
				value={formik.values.urlVideo}
				onChange={formik.handleChange('urlVideo')}
				error={
					formik.touched.urlVideo && Boolean(formik.errors.urlVideo)
				}
				helperText={formik.touched.urlVideo && formik.errors.urlVideo}
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
					message='Capitulo actualizado'
				/>
			)}
		</FormLayout>
	);
};

export default ChapterForm;
