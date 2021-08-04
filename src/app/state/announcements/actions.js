import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getAnnouncementsAction(id = null) {
	return async dispatch => {
		dispatch(actionCreators.getAnnouncements());
		try {
			let endpoint = apiSettings.ENDPOINT_ANNOUNCEMENTS;
			if (id)
				endpoint = `${apiSettings.ENDPOINT_ANNOUNCEMENTS}?capituloId=${id}`;
			const response = await axios.get(endpoint);
			dispatch(actionCreators.setAnnouncements(response.data));
		} catch (error) {
			dispatch(actionCreators.getAnnouncementsRejected());
		}
	};
}

export function addAnnouncementAction(announcement) {
	return async dispatch => {
		dispatch(actionCreators.addAnnouncement());
		try {
			await axios.post(apiSettings.ENDPOINT_ANNOUNCEMENTS, announcement);
			dispatch(actionCreators.addAnnouncementFulfilled(announcement));
		} catch (error) {
			dispatch(actionCreators.addAnnouncementError(true));
		}
	};
}

export function editAnnouncementAction(announcement) {
	return async dispatch => {
		dispatch(actionCreators.editAnnouncement());
		try {
			await axios.put(
				`${apiSettings.ENDPOINT_ANNOUNCEMENTS}/${announcement.id}`,
				announcement
			);
			dispatch(actionCreators.editAnnouncementFulfilled(announcement));
		} catch (error) {
			dispatch(actionCreators.editAnnouncementError(true));
		}
	};
}

export function deleteAnnouncementAction(id) {
	return async dispatch => {
		dispatch(actionCreators.deleteAnnouncement());
		try {
			await axios.delete(`${apiSettings.ENDPOINT_ANNOUNCEMENTS}/${id}`);
			dispatch(actionCreators.deleteAnnouncementFulfilled(id));
		} catch (error) {
			dispatch(actionCreators.deleteAnnouncementError(true));
		}
	};
}

export function getAnnouncementEditAction(announcement) {
	return dispatch => {
		dispatch(actionCreators.getAnnouncementEit(announcement));
	};
}
