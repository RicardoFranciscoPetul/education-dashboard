import { combineReducers } from 'redux'
import coursesReducer from './courses/reducer';

export default combineReducers({
    courses: coursesReducer
})