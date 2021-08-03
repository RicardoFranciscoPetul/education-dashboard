import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getCoursesAction() {
	return async dispatch => {
		dispatch(actionCreators.getCourses());
		try {
			const response = await axios.get(apiSettings.ENDPOINT_COURSES);
			dispatch(actionCreators.setCourses(response.data));
		} catch (error) {
			dispatch(actionCreators.getCoursesRejected());
		}
	};
}

export function addCourseAction(course) {
	return async dispatch => {
		dispatch(actionCreators.addCourse());
		try {
			await axios.post(apiSettings.ENDPOINT_COURSES, course);
			dispatch(actionCreators.addCourseFulfilled(course));
		} catch (error) {
			dispatch(actionCreators.addCourseError(true));
		}
	};
}

export function editCourseAction(course) {
	return async dispatch => {
		dispatch(actionCreators.editCourse());
		try {
			await axios.put(`${apiSettings.ENDPOINT_COURSES}/${course.id}`, course);
			dispatch(actionCreators.editCourseFulfilled(course));
		} catch (error) {
			dispatch(actionCreators.editCourseError(true));
		}
	};
}

export function getCourseEditAction(course) {
	return dispatch => {
		dispatch(actionCreators.getCourseEit(course));
	};
}
