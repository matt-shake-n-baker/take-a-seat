import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store;