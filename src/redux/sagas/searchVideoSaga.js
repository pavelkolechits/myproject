import {
	takeEvery,
	call,
	put
} from "@redux-saga/core/effects";
import {
	ACTIONS
} from "../constants";

function* getVideoWorker() {
	try {
		const result = yield call(() =>
			fetch(
				`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDqoHCbhmTQ3QNWjfRKSUZoeBi6OWy-h4I&type=video&maxResults=9&q=${""}`
			)
		);
		const video = yield result.json();
		yield put({
			type: ACTIONS.GET_VIDEO_SUCCESS,
			video
		});
	} catch (e) {
		yield put({
			type: ACTIONS.GET_VIDEO_FAILED,
			e
		});
	}
}

function* getInputSaga(action) {
	try {
		const {
			text
		} = action;
		const result = yield call(() =>
			fetch(
				`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDqoHCbhmTQ3QNWjfRKSUZoeBi6OWy-h4I&type=video&maxResults=9&q=${text}`
			)
		);
		const video = yield result.json();
		yield put({
			type: ACTIONS.GET_VIDEO_SUCCESS,
			video
		});
	} catch (e) {}
}
export function* getVideoWatcher() {
	yield takeEvery(ACTIONS.GET_VIDEO_REQUEST, getVideoWorker);
	yield takeEvery(ACTIONS.GET_INPUT_VALUE, getInputSaga);
}