import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ACTIONS } from "../constants";

function* getVideoOmdbWorker() {
  try {
    const result = yield call(() =>
      fetch(
        `https://www.omdbapi.com/?s=${"space"}&plot=short&apikey=f19c5d9a&page=1`
      )
    );

    const request = yield result.json();

    yield put({ type: ACTIONS.GET_VIDEO_OMDB_SUCCESS, request });
  } catch (e) {}
}

function* getInputSagaOmdb(action) {
  try {
    const { text } = action;
  
    const result = yield call(() =>
      fetch(
        `https://www.omdbapi.com/?s=${ text }&plot=short&apikey=f19c5d9a&page=1`
      )
    );
    const request = yield result.json();
    yield put({
      type: ACTIONS.GET_VIDEO_OMDB_SUCCESS,
      request,
    });
  } catch (e) {
  

  }
}

function* showDetailsOmdb(action) {
  try {
    const { id } = action;
    const result = yield call(() =>
      fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=f19c5d9a`)
    );
    const allInfo = yield result.json();
    yield put({
      type: ACTIONS.GET_ALL_ABOUT_FILM,
      allInfo,
    });
  } catch (e) {}
}
function* upPagination(action) {
  try {
    const { page, text } = action;
    console.log(page, text);
    const result = yield call(() =>
      fetch(
        `https://www.omdbapi.com/?s=${text || "space"}&plot=short&apikey=f19c5d9a&page=${page}`
      )
    );
    const request = yield result.json();
    
    yield put({
      type: ACTIONS.GET_VIDEO_OMDB_PAGINATION_SUCCESS,
      request,
    });
  } catch (e) {}
}

export function* getVideoOmdWatcher() {
  yield takeEvery(ACTIONS.GET_VIDEO_OMDB_REQUEST, getVideoOmdbWorker);
  yield takeEvery(ACTIONS.GET_INPUT_VALUE_OMDB, getInputSagaOmdb);
  yield takeEvery(ACTIONS.GET_OMDB_ID, showDetailsOmdb);
  yield takeEvery(ACTIONS.GET_VIDEO_OMDB_PAGINATION, upPagination);
}
