import { DASH_ROUTES, USER_ROUTES } from './constants/navigation';

export const navigations = [
	{
		name: 'Usuario',
		icon: 'dashboard',
		path: USER_ROUTES.PREFERENCES,
	},
	{
		name: 'Cursos',
		icon: 'School',
		path: DASH_ROUTES.COURSES,
	},
	{
		name: 'Clases',
		icon: 'class',
		path: DASH_ROUTES.LESSONS,
	},
	{
		name: 'Temarios',
		icon: 'List',
		path: DASH_ROUTES.TEMARIES,
	},
	{
		name: 'Estudiantes',
		icon: 'person',
		path: DASH_ROUTES.STUDENTS,
	},
	{
		name: 'Anuncios',
		icon: 'Announcement',
		path: DASH_ROUTES.ANNOUNCEMENTS,
	},
	{
		name: 'Salir',
		icon: 'power_settings_new',
		path: USER_ROUTES.LOGOUT,
	},
];
