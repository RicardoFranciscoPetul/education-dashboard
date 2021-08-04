import { combineReducers } from 'redux';
import coursesReducer from './courses/reducer';
import lessonsReducer from './lessons/reducer';
import chaptersReducer from './chapters/reducer';
import studensReducer from './students/reducer';
import announcementsReducer from './announcements/reducer';

export default combineReducers({
	courses: coursesReducer,
	lessons: lessonsReducer,
	chapters: chaptersReducer,
	students: studensReducer,
	announcements: announcementsReducer,
});
