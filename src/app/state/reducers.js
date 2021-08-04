import { combineReducers } from 'redux';
import coursesReducer from './courses/reducer';
import lessonsReducer from './lessons/reducer';

export default combineReducers({
	courses: coursesReducer,
	lessons: lessonsReducer,
});
