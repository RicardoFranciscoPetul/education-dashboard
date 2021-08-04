import * as types from './types';

const initialState = {
	students: [],
	error: false,
	loading: false,
	addLoading: false,
	edited: false,
	studentEdit: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.STUDENTS_PENDING:
			return {
				...state,
				loading: action.payload,
			};
		case types.STUDENTS_FULFILLED:
			return {
				...state,
				loading: false,
				error: false,
				students: action.payload,
			};
		case types.STUDENTS_REJECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case types.ADD_STUDENT_PENDING:
			return {
				...state,
				addLoading: true,
				edited: false,
			};
		case types.ADD_STUDENT_FULFILLED:
			return {
				...state,
				addLoading: false,
				edited: true,
				students: [...state.students, action.payload],
			};
		case types.ADD_STUDENT_REJECTED:
			return {
				...state,
				addLoading: false,
				error: true,
				edited: false,
			};

		case types.STORE_CURRENT_STUDENT:
			return {
				...state,
				studentEdit: action.payload,
			};

		default:
			return state;
	}
}
