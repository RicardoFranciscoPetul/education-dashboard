const DASHBOARD_PREFIX = '/dashboard';
const USER_PREFIX = '/usuario';

export const DASH_ROUTES = {
	HOME: `${DASHBOARD_PREFIX}/home`,
	COURSES: `${DASHBOARD_PREFIX}/cursos`,
	LESSONS: `${DASHBOARD_PREFIX}/clases`,
	TEMARIES: `${DASHBOARD_PREFIX}/temarios`,
	STUDENTS: `${DASHBOARD_PREFIX}/estudiantes`,
	ANNOUNCEMENTS: `${DASHBOARD_PREFIX}/anuncios`,
};

export const USER_ROUTES = {
	PREFERENCES: `${USER_PREFIX}/preferencias`,
	LOGOUT: `${USER_PREFIX}/logout`,
};
