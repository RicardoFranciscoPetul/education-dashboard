import * as types from './types';

const initialState = {
	lessons: [],
	error: false,
	loading: false,
	addLoading: false,
	edited: false,
	lessonEdit: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.LESSONS_PENDING:
			return {
				...state,
				loading: action.payload,
			};
		case types.LESSONS_FULFILLED:
			return {
				...state,
				loading: false,
				error: false,
				lessons: action.payload,
			};
		case types.LESSONS_REJECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case types.ADD_LESSON_PENDING:
		case types.EDIT_LESSON_PENDING:
			return {
				...state,
				addLoading: true,
				edited: false,
			};
		case types.ADD_LESSON_FULFILLED:
			return {
				...state,
				addLoading: false,
				edited: true,
				lessons: [...state.lessons, action.payload],
			};
		case types.ADD_LESSON_REJECTED:
		case types.EDIT_LESSON_REJECTED:
			return {
				...state,
				addLoading: false,
				error: true,
				edited: false
			};
		case types.EDIT_LESSON_FULFILLED:
			return {
				...state,
				addLoading: false,
				error: false,
				edited: true,
				lessons: state.lessons.map(c =>
					c.id === action.payload.id ? (c = action.payload) : c
				),
			};
		case types.STORE_CURRENT_LESSON:
			return {
				...state,
				lessonEdit: action.payload,
			};
		case types.DELETE_LESSON_FULFILLED:
			return {
				...state,
				lessons: state.lessons.filter(l => l.id !== action.payload),
			};
		default:
			return state;
	}
}
