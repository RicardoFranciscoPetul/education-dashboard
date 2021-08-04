import * as yup from 'yup';

export const titulo = yup
	.string('Ingresa el titulo')
	.min(3, 'El titulo debe contener al menos 3 caracteres')
	.required('Titulo requerido');
export const descripcion = yup
	.string('Ingresa una breve descripción del curso')
	.min(5, 'La descripción debe tener minimo 5 caracteres')
	.required('Descripción requerida');

export const youtube = yup
	.string('Ingresa la url del video')
	.min(15, 'La dirección debe contener al menos 15 carateres')
	.required('URL requerida');
