import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getLessonsAction(id = null) {
	return async dispatch => {
		dispatch(actionCreators.getLessons());
		try {
			const response = await axios.get(
				!id
					? apiSettings.ENDPOINT_LESSONS
					: `${apiSettings.ENDPOINT_LESSONS}?cursoId=${id}`
			);
			dispatch(actionCreators.setLessons(response.data));
		} catch (error) {
			dispatch(actionCreators.getLessonsRejected());
		}
	};
}

export function addLessonAction(lesson) {
	return async dispatch => {
		dispatch(actionCreators.addLesson());
		try {
			await axios.post(apiSettings.ENDPOINT_LESSONS, lesson);
			dispatch(actionCreators.addLessonFulfilled(lesson));
		} catch (error) {
			dispatch(actionCreators.addLessonError(true));
		}
	};
}

export function editLessonAction(lesson) {
	return async dispatch => {
		dispatch(actionCreators.editLesson());
		try {
			await axios.put(
				`${apiSettings.ENDPOINT_LESSONS}/${lesson.id}`,
				lesson
			);
			dispatch(actionCreators.editLessonFulfilled(lesson));
		} catch (error) {
			dispatch(actionCreators.editLessonError(true));
		}
	};
}

export function deleteLessonAction(id) {
	return async dispatch => {
		dispatch(actionCreators.deleteLesson());
		try {
			await axios.delete(`${apiSettings.ENDPOINT_LESSONS}/${id}`);
			dispatch(actionCreators.deleteLessonFulfilled(id));
		} catch (error) {
			dispatch(actionCreators.deleteLessonError(true));
		}
	};
}

export function getLessonEditAction(lesson) {
	return dispatch => {
		dispatch(actionCreators.getLessonEit(lesson));
	};
}
