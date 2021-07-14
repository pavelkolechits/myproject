import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { searchReducer } from './reducers/searchReducer';
import {getVideoWatcher} from "./sagas/searchVideoSaga"
import {searchOmdbhReducer} from "./reducers/searchOmdbhReducer"
import {getVideoOmdWatcher} from "./sagas/searchOmdbSaga"

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ searchReducer, searchOmdbhReducer }), composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(getVideoWatcher)
sagaMiddleware.run(getVideoOmdWatcher)