import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { searchReducer } from './reducers/searchReducer';
import {getVideoWatcher} from "./sagas/searchVideoSaga"
import {searchOmdbReducer} from "./reducers/searchOmdbReducer"
import {getVideoOmdWatcher} from "./sagas/searchOmdbSaga"

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ searchReducer, searchOmdbReducer }), composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(getVideoWatcher)
sagaMiddleware.run(getVideoOmdWatcher)