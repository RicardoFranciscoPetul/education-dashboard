import * as types from './types';

export const getChapters = () => ({
	type: types.CHAPTERS_PENDING,
	payload: true,
});

export const setChapters = data => ({
	type: types.CHAPTERS_FULFILLED,
	payload: data,
});

export const getChaptersRejected = () => ({
	type: types.CHAPTERS_REJECTED,
	payload: true,
});

export const addChapter = () => ({
	type: types.ADD_CHAPTER_PENDING,
});

export const addChapterFulfilled = data => ({
	type: types.ADD_CHAPTER_FULFILLED,
	payload: data,
});

export const addChapterError = () => ({
	type: types.ADD_CHAPTER_REJECTED,
});

export const getChapterEit = lesson => ({
	type: types.STORE_CURRENT_CHAPTER,
	payload: lesson,
});

export const editChapter = () => ({
	type: types.EDIT_CHAPTER_PENDING,
});

export const editChapterFulfilled = data => ({
	type: types.EDIT_CHAPTER_FULFILLED,
	payload: data,
});

export const editChapterError = () => ({
	type: types.EDIT_CHAPTER_REJECTED,
});

export const deleteChapter = () => ({
	type: types.DELETE_CHAPTER_PENDING,
});

export const deleteChapterFulfilled = id => ({
	type: types.DELETE_CHAPTER_FULFILLED,
	payload: id,
});

export const deleteChapterError = () => ({
	type: types.DELETE_CHAPTER_REJECTED,
});