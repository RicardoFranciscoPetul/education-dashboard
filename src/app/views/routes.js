import { Loadable } from '../components';
import { DASH_ROUTES } from '../constants/navigation';

const CoursesComponent = Loadable({
	loader: () => import('../views/Courses'),
});

const LessonsComponent = Loadable({
	loader: () => import('../views/Lessons'),
});

const TemariesComponent = Loadable({
	loader: () => import('../views/Temaries'),
});

const StudensComponent = Loadable({
	loader: () => import('../views/Students'),
});

const AnnouncementsComponent = Loadable({
	loader: () => import('../views/Announcements'),
});

const dahboardRoutes = [
	{
		path: DASH_ROUTES.COURSES,
		component: CoursesComponent,
		auth: null,
	},
	{
		path: DASH_ROUTES.LESSONS,
		component: LessonsComponent,
		auth: null,
	},
	{
		path: DASH_ROUTES.TEMARIES,
		component: TemariesComponent,
		auth: null,
	},
	{
		path: DASH_ROUTES.STUDENTS,
		component: StudensComponent,
		auth: null,
	},
	{
		path: DASH_ROUTES.ANNOUNCEMENTS,
		component: AnnouncementsComponent,
		auth: null,
	},
];

export default dahboardRoutes;
