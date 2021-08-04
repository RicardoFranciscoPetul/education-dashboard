import * as types from './types';

export const getCourses = () => ({
	type: types.COURSES_PENDING,
	payload: true,
});

export const setCourses = data => ({
	type: types.COURSES_FULFILLED,
	payload: data,
});

export const getCoursesRejected = () => ({
	type: types.COURSES_REJECTED,
	payload: true,
});

export const addCourse = () => ({
	type: types.ADD_COURSE_PENDING,
});

export const addCourseFulfilled = data => ({
	type: types.ADD_COURSE_FULFILLED,
	payload: data,
});

export const addCourseError = () => ({
	type: types.ADD_COURSE_REJECTED,
});

export const getCourseEit = course => ({
	type: types.STORE_CURRENT_COURSE,
	payload: course,
});

export const editCourse = () => ({
	type: types.EDIT_COURSE_PENDING,
});

export const editCourseFulfilled = data => ({
	type: types.EDIT_COURSE_FULFILLED,
	payload: data,
});

export const editCourseError = () => ({
	type: types.EDIT_COURSE_REJECTED,
});

export const getCourseDetail = () => ({
	type: types.COURSE_DETAIL_PENDING,
	payload: true,
});

export const setCourseDetail = data => ({
	type: types.COURSE_DETAIL_FULFILLED,
	payload: data,
});

export const getCourseDetailRejected = () => ({
	type: types.COURSE_DETAIL_REJECTED,
	payload: true,
});



