import * as types from './types';

export const getAnnouncements = () => ({
	type: types.ANNOUNCEMENTS_PENDING,
	payload: true,
});

export const setAnnouncements = data => ({
	type: types.ANNOUNCEMENTS_FULFILLED,
	payload: data,
});

export const getAnnouncementsRejected = () => ({
	type: types.ANNOUNCEMENTS_REJECTED,
	payload: true,
});

export const addAnnouncement = () => ({
	type: types.ADD_ANNOUNCEMENT_PENDING,
});

export const addAnnouncementFulfilled = data => ({
	type: types.ADD_ANNOUNCEMENT_FULFILLED,
	payload: data,
});

export const addAnnouncementError = () => ({
	type: types.ADD_ANNOUNCEMENT_REJECTED,
});

export const getAnnouncementEit = announcement => ({
	type: types.STORE_CURRENT_ANNOUNCEMENT,
	payload: announcement,
});

export const editAnnouncement = () => ({
	type: types.EDIT_ANNOUNCEMENT_PENDING,
});

export const editAnnouncementFulfilled = data => ({
	type: types.EDIT_ANNOUNCEMENT_FULFILLED,
	payload: data,
});

export const editAnnouncementError = () => ({
	type: types.EDIT_ANNOUNCEMENT_REJECTED,
});

export const deleteAnnouncement = () => ({
	type: types.DELETE_ANNOUNCEMENT_PENDING,
});

export const deleteAnnouncementFulfilled = id => ({
	type: types.DELETE_ANNOUNCEMENT_FULFILLED,
	payload: id,
});

export const deleteAnnouncementError = () => ({
	type: types.DELETE_ANNOUNCEMENT_REJECTED,
});