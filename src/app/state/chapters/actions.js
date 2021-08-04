import axios from 'axios';
import * as actionCreators from './action-creators';
import { apiSettings } from '../../settings';

export function getChaptersAction(id = null) {
	return async dispatch => {
		dispatch(actionCreators.getChapters());
		try {
			let endpoint = apiSettings.ENDPOINT_CHAPTERS;
			if (id) endpoint = `${apiSettings.ENDPOINT_CHAPTERS}?claseId=${id}`;
			const response = await axios.get(endpoint);
			dispatch(actionCreators.setChapters(response.data));
		} catch (error) {
			dispatch(actionCreators.getChaptersRejected());
		}
	};
}

export function addChapterAction(lesson) {
	return async dispatch => {
		dispatch(actionCreators.addChapter());
		try {
			await axios.post(apiSettings.ENDPOINT_CHAPTERS, lesson);
			dispatch(actionCreators.addChapterFulfilled(lesson));
		} catch (error) {
			dispatch(actionCreators.addChapterError(true));
		}
	};
}

export function editChapterAction(lesson) {
	return async dispatch => {
		dispatch(actionCreators.editChapter());
		try {
			await axios.put(
				`${apiSettings.ENDPOINT_CHAPTERS}/${lesson.id}`,
				lesson
			);
			dispatch(actionCreators.editChapterFulfilled(lesson));
		} catch (error) {
			dispatch(actionCreators.editChapterError(true));
		}
	};
}

export function deleteChapterAction(id) {
	return async dispatch => {
		dispatch(actionCreators.deleteChapter());
		try {
			await axios.delete(`${apiSettings.ENDPOINT_CHAPTERS}/${id}`);
			dispatch(actionCreators.deleteChapterFulfilled(id));
		} catch (error) {
			dispatch(actionCreators.deleteChapterError(true));
		}
	};
}

export function getChapterEditAction(lesson) {
	return dispatch => {
		dispatch(actionCreators.getChapterEit(lesson));
	};
}
