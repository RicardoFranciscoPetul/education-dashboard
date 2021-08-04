import * as types from './types';

export const getStudents = () => ({
	type: types.STUDENTS_PENDING,
	payload: true,
});

export const setStudents = data => ({
	type: types.STUDENTS_FULFILLED,
	payload: data,
});

export const getStudentsRejected = () => ({
	type: types.STUDENTS_REJECTED,
	payload: true,
});

export const addStudent = () => ({
	type: types.ADD_STUDENT_PENDING,
});

export const addStudentFulfilled = data => ({
	type: types.ADD_STUDENT_FULFILLED,
	payload: data,
});

export const addStudentError = () => ({
	type: types.ADD_STUDENT_REJECTED,
});

export const getStudentEit = lesson => ({
	type: types.STORE_CURRENT_STUDENT,
	payload: lesson,
});
