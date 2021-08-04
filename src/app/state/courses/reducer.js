import * as types from './types';

const initialState = {
	courses: [],
	error: false,
	loading: false,
	addLoading: false,
	edited: false,
	courseEdit: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.COURSES_PENDING:
		case types.COURSE_DETAIL_PENDING:
			return {
				...state,
				loading: action.payload,
			};
		case types.COURSES_FULFILLED:
			return {
				...state,
				loading: false,
				error: false,
				courses: action.payload,
			};
		case types.COURSES_REJECTED:
		case types.COURSE_DETAIL_REJECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case types.ADD_COURSE_PENDING:
		case types.EDIT_COURSE_PENDING:
			return {
				...state,
				addLoading: true,
				edited: false,
			};
		case types.ADD_COURSE_FULFILLED:
			return {
				...state,
				addLoading: false,
				edited: true,
				courses: [...state.courses, action.payload],
			};
		case types.ADD_COURSE_REJECTED:
		case types.EDIT_COURSE_REJECTED:
			return {
				...state,
				addLoading: false,
				error: true,
				edited: false,
			};
		case types.EDIT_COURSE_FULFILLED:
			return {
				...state,
				addLoading: false,
				error: false,
				edited: true,
				courses: state.courses.map(c =>
					c.id === action.payload.id ? (c = action.payload) : c
				),
			};
		case types.STORE_CURRENT_COURSE:
			return {
				...state,
				edited: false,
				courseEdit: action.payload,
			};
		case types.DELETE_COURSE_FULFILLED:
			return {
				...state,
				courses: state.courses.filter(c => c.id !== action.payload),
			};

		case types.COURSE_DETAIL_FULFILLED:
			return {
				...state,
				error: false,
				courseEdit: action.payload,
				loading: false,
			};

		default:
			return state;
	}
}
