import { Loadable } from '../components';
import { DASH_ROUTES } from '../constants/navigation';

const CoursesComponent = Loadable({
	loader: () => import('../views/Courses'),
});

const LessonsComponent = Loadable({
	loader: () => import('../views/Lessons'),
});

const TemariesComponent = Loadable({
	loader: () => import('../views/Chapters'),
});

const StudensComponent = Loadable({
	loader: () => import('../views/Students'),
});

const AnnouncementsComponent = Loadable({
	loader: () => import('../views/Announcements'),
});

const EditCourse = Loadable({
	loader: () => import('../views/CourseEdit')
})

const dahboardRoutes = [
	{
		path: DASH_ROUTES.COURSES,
		component: CoursesComponent,
		auth: null,
		exact: true,
	},
	{
		path: `${ DASH_ROUTES.COURSES }/editar/:id`,
		component: EditCourse,
		auth: null,
		exact: true,
	},
	{
		path: DASH_ROUTES.LESSONS,
		component: LessonsComponent,
		auth: null,
		exact: true,
	},
	{
		path: DASH_ROUTES.CHAPTERS,
		component: TemariesComponent,
		auth: null,
		exact: true,
	},
	{
		path: DASH_ROUTES.STUDENTS,
		component: StudensComponent,
		auth: null,
		exact: true,
	},
	{
		path: DASH_ROUTES.ANNOUNCEMENTS,
		component: AnnouncementsComponent,
		auth: null,
		exact: true,
	},
];

export default dahboardRoutes;
