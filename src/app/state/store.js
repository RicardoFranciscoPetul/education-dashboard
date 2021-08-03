import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];
let devtools = x => x;

if (process.env.NODE_ENV !== 'production') {
	middlewares.push(createLogger());
	if (
		typeof window === 'object' &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
	)
		devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
	reducer,
	compose(applyMiddleware(...middlewares), devtools)
);

export default store;
