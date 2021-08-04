import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addAnnouncementAction,
	editAnnouncementAction,
} from '../../state/announcements/actions';
import { validations } from '../../constants';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import FormLayout from './Layout';
import Input from '../Input';
import ContainedButtons from './ContainedButtons';
import Alert from '../Alert';

const validationSchema = yup.object({
	titulo: validations.titulo,
	descripcion: validations.descripcion,
});

const AnnouncementsForm = ({ title, isEdition, initialData, ...props }) => {
	const dispatch = useDispatch();
	const { error, addLoading, edited } = useSelector(
		state => state.announcements
	);

	const addAnnouncement = course => dispatch(addAnnouncementAction(course));
	const editAnnouncement = course => dispatch(editAnnouncementAction(course));
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
				values.capituloId = Number(props.parentId);
				addAnnouncement(values);
			} else {
				editAnnouncement(values);
			}
		},
	});
	return (
		<FormLayout title={title} onSubmit={formik.handleSubmit}>
			<Input
				name='titulo'
				label='Titulo del anuncio'
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

export default AnnouncementsForm;
