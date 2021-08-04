import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getLessonsAction() {
	return async dispatch => {
		dispatch(actionCreators.getLessons());
		try {
			const response = await axios.get(apiSettings.ENDPOINT_LESSONS);
			dispatch(actionCreators.setLessons(response.data));
		} catch (error) {
			dispatch(actionCreators.getLessonsRejected());
		}
	};
}

export function addLessonAction(course) {
	return async dispatch => {
		dispatch(actionCreators.addLesson());
		try {
			await axios.post(apiSettings.ENDPOINT_LESSONS, course);
			dispatch(actionCreators.addLessonFulfilled(course));
		} catch (error) {
			dispatch(actionCreators.addLessonError(true));
		}
	};
}

export function editLessonAction(course) {
	return async dispatch => {
		dispatch(actionCreators.editLesson());
		try {
			await axios.put(`${apiSettings.ENDPOINT_LESSONS}/${course.id}`, course);
			dispatch(actionCreators.editLessonFulfilled(course));
		} catch (error) {
			dispatch(actionCreators.editLessonError(true));
		}
	};
}

export function getLessonEditAction(course) {
	return dispatch => {
		dispatch(actionCreators.getLessonEit(course));
	};
}
