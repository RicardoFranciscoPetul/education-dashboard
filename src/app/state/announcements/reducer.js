import * as types from './types';

const initialState = {
	announcements: [],
	error: false,
	loading: false,
	addLoading: false,
	edited: false,
	announcementEdit: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.ANNOUNCEMENTS_PENDING:
			return {
				...state,
				loading: action.payload,
			};
		case types.ANNOUNCEMENTS_FULFILLED:
			return {
				...state,
				loading: false,
				error: false,
				announcements: action.payload,
			};
		case types.ANNOUNCEMENTS_REJECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case types.ADD_ANNOUNCEMENT_PENDING:
		case types.EDIT_ANNOUNCEMENT_PENDING:
			return {
				...state,
				addLoading: true,
				edited: false,
			};
		case types.ADD_ANNOUNCEMENT_FULFILLED:
			return {
				...state,
				addLoading: false,
				edited: true,
				announcements: [...state.announcements, action.payload],
			};
		case types.ADD_ANNOUNCEMENT_REJECTED:
		case types.EDIT_ANNOUNCEMENT_REJECTED:
			return {
				...state,
				addLoading: false,
				error: true,
				edited: false
			};
		case types.EDIT_ANNOUNCEMENT_FULFILLED:
			return {
				...state,
				addLoading: false,
				error: false,
				edited: true,
				announcements: state.announcements.map(c =>
					c.id === action.payload.id ? (c = action.payload) : c
				),
			};
		case types.STORE_CURRENT_ANNOUNCEMENT:
			return {
				...state,
				announcementEdit: action.payload,
			};
		case types.DELETE_ANNOUNCEMENT_FULFILLED:
			return {
				...state,
				announcements: state.announcements.filter(l => l.id !== action.payload),
			};
		default:
			return state;
	}
}
