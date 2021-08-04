import { useFormik } from 'formik';
import React from 'react';
import Input from '../Input';
import ContainedButtons from './ContainedButtons';
import FormLayout from './Layout';

const StudentsForm = ({ title, isEdition, initialData, ...props }) => {
	const initialValues = initialData;

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: null,
	});
	return (
		<FormLayout title={title} onSubmit={formik.handleSubmit}>
			<Input
				name='nombre'
				label='Nombre'
				variant='filled'
				disabled
				value={formik.values.nombre}
				onChange={formik.handleChange('nombre')}
				error={formik.touched.nombre && Boolean(formik.errors.nombre)}
				helperText={formik.touched.nombre && formik.errors.nombre}
			/>
			<Input
				name='apellidoPaterno'
				label='Apellido Paterno'
				variant='filled'
				disabled
				value={formik.values.apellidoPaterno}
				onChange={formik.handleChange('apellidoPaterno')}
				error={
					formik.touched.apellidoPaterno &&
					Boolean(formik.errors.apellidoPaterno)
				}
				helperText={
					formik.touched.apellidoPaterno &&
					formik.errors.apellidoPaterno
				}
			/>
			<Input
				name='apellidoMaterno'
				label='Apellido Materno'
				variant='filled'
				disabled
				value={formik.values.apellidoMaterno}
				onChange={formik.handleChange('apellidoMaterno')}
				error={
					formik.touched.apellidoMaterno &&
					Boolean(formik.errors.apellidoMaterno)
				}
				helperText={
					formik.touched.apellidoMaterno &&
					formik.errors.apellidoMaterno
				}
			/>
			<Input
				name='especialidad'
				label='Especialidad'
				variant='filled'
				disabled
				value={formik.values.especialidad}
				onChange={formik.handleChange('especialidad')}
				error={
					formik.touched.especialidad &&
					Boolean(formik.errors.especialidad)
				}
				helperText={
					formik.touched.especialidad && formik.errors.especialidad
				}
			/>
			<Input
				name='semestre'
				label='No. Semestre'
				variant='filled'
				disabled
				value={formik.values.semestre}
				onChange={formik.handleChange('semestre')}
				error={
					formik.touched.semestre && Boolean(formik.errors.semestre)
				}
				helperText={formik.touched.semestre && formik.errors.semestre}
			/>
			<Input
				name='fechaNacimiento'
				label='Fecha Nacimiento'
				variant='filled'
				disabled
				value={formik.values.fechaNacimiento}
				onChange={formik.handleChange('fechaNacimiento')}
				error={
					formik.touched.fechaNacimiento &&
					Boolean(formik.errors.fechaNacimiento)
				}
				helperText={
					formik.touched.fechaNacimiento &&
					formik.errors.fechaNacimiento
				}
			/>

			<ContainedButtons
				isEdition={isEdition}
				onlyRead={props.onlyRead}
				secondAction={props.secondAction}
				isLoading={false}
			/>
		</FormLayout>
	);
};

export default StudentsForm;
