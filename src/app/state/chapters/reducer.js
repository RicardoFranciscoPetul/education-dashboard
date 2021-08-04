import * as types from './types';

const initialState = {
	chapters: [],
	error: false,
	loading: false,
	addLoading: false,
	edited: false,
	chapterEdit: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.CHAPTERS_PENDING:
			return {
				...state,
				loading: action.payload,
			};
		case types.CHAPTERS_FULFILLED:
			return {
				...state,
				loading: false,
				error: false,
				chapters: action.payload,
			};
		case types.CHAPTERS_REJECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case types.ADD_CHAPTER_PENDING:
		case types.EDIT_CHAPTER_PENDING:
			return {
				...state,
				addLoading: true,
				edited: false,
			};
		case types.ADD_CHAPTER_FULFILLED:
			return {
				...state,
				addLoading: false,
				edited: true,
				chapters: [...state.chapters, action.payload],
			};
		case types.ADD_CHAPTER_REJECTED:
		case types.EDIT_CHAPTER_REJECTED:
			return {
				...state,
				addLoading: false,
				error: true,
				edited: false
			};
		case types.EDIT_CHAPTER_FULFILLED:
			return {
				...state,
				addLoading: false,
				error: false,
				edited: true,
				chapters: state.chapters.map(c =>
					c.id === action.payload.id ? (c = action.payload) : c
				),
			};
		case types.STORE_CURRENT_CHAPTER:
			return {
				...state,
				chapterEdit: action.payload,
			};
		case types.DELETE_CHAPTER_FULFILLED:
			return {
				...state,
				chapters: state.chapters.filter(l => l.id !== action.payload),
			};
		default:
			return state;
	}
}
