import * as types from './types';

export const getLessons = () => ({
	type: types.LESSONS_PENDING,
	payload: true,
});

export const setLessons = data => ({
	type: types.LESSONS_FULFILLED,
	payload: data,
});

export const getLessonsRejected = () => ({
	type: types.LESSONS_REJECTED,
	payload: true,
});

export const addLesson = () => ({
	type: types.ADD_LESSON_PENDING,
});

export const addLessonFulfilled = data => ({
	type: types.ADD_LESSON_FULFILLED,
	payload: data,
});

export const addLessonError = () => ({
	type: types.ADD_LESSON_REJECTED,
});

export const getLessonEit = lesson => ({
	type: types.STORE_CURRENT_LESSON,
	payload: lesson,
});

export const editLesson = () => ({
	type: types.EDIT_LESSON_PENDING,
});

export const editLessonFulfilled = data => ({
	type: types.EDIT_LESSON_FULFILLED,
	payload: data,
});

export const editLessonError = () => ({
	type: types.EDIT_LESSON_REJECTED,
});

export const deleteLesson = () => ({
	type: types.DELETE_LESSON_PENDING,
});

export const deleteLessonFulfilled = id => ({
	type: types.DELETE_LESSON_FULFILLED,
	payload: id,
});

export const deleteLessonError = () => ({
	type: types.DELETE_LESSON_REJECTED,
});