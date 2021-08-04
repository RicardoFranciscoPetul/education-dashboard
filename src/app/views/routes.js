import React from 'react';
import { Redirect } from 'react-router-dom';
import { DASH_ROUTES } from '../constants/navigation';

const CoursesComponent = React.lazy(() => import('../views/Courses'));

const LessonsComponent = React.lazy(() => import('../views/Lessons'));

const TemariesComponent = React.lazy(() => import('../views/Chapters'));

const StudensComponent = React.lazy(() => import('../views/Students'));

const AnnouncementsComponent = React.lazy(() =>
	import('../views/Announcements')
);

const EditCourse = React.lazy(() => import('../views/CourseEdit'));

const dahboardRoutes = [
	{
		path: '/',
		exact: true,
		component: () => <Redirect to={DASH_ROUTES.COURSES} />,
	},
	{
		path: DASH_ROUTES.COURSES,
		component: CoursesComponent,
		auth: null,
		exact: true,
	},
	{
		path: `${DASH_ROUTES.COURSES}/editar/:id`,
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
		path: `${DASH_ROUTES.STUDENTS}/chapter/:id`,
		component: StudensComponent,
		auth: null,
		exact: true,
	},
	{
		path: `${DASH_ROUTES.ANNOUNCEMENTS}`,
		component: AnnouncementsComponent,
		auth: null,
		exact: true,
	},
	{
		path: `${DASH_ROUTES.ANNOUNCEMENTS}/chapter/:id`,
		component: AnnouncementsComponent,
		auth: null,
		exact: true,
	},
];

export default dahboardRoutes;
