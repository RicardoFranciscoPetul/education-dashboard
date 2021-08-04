import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getStudentsAction(id = null) {
	return async dispatch => {
		dispatch(actionCreators.getStudents());
		try {
			const response = await axios.get(
				!id
					? apiSettings.ENDPOINT_STUDENTS
					: `${apiSettings.ENDPOINT_STUDENTS}?capituloId=${id}`
			);
			dispatch(actionCreators.setStudents(response.data));
		} catch (error) {
			dispatch(actionCreators.getStudentsRejected());
		}
	};
}

export function addStudentAction(lesson) {
	return async dispatch => {
		dispatch(actionCreators.addStudent());
		try {
			await axios.post(apiSettings.ENDPOINT_STUDENTS, lesson);
			dispatch(actionCreators.addStudentFulfilled(lesson));
		} catch (error) {
			dispatch(actionCreators.addStudentError(true));
		}
	};
}

export function getStudentEditAction(lesson) {
	return dispatch => {
		dispatch(actionCreators.getStudentEit(lesson));
	};
}
