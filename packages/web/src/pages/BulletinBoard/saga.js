import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_BASE_URL, BULLETIN_ENDPOINT } from './const';
import { setBulletins } from './reducer';

export const BULLETIN_FETCH_REQUESTED = "BULLETIN_FETCH_REQUESTED";

function* fetchBulletins() {
    try {
        const res = yield call(axios.get, API_BASE_URL + BULLETIN_ENDPOINT)
        if (res.status && res.status == 200 && res?.data?.results && Array.isArray(res.data.results)) {
            yield put({ type: setBulletins, payload: res.data.results })
        } else yield put({ type: "BULLETINS_FETCH_FAILED", message: "Failed to fetch bulletins" });
    } catch (err) {
        yield put({ type: "BULLETINS_FETCH_FAILED", message: err.message });
    }
}

function* bulletinSaga() {
    yield takeEvery(BULLETIN_FETCH_REQUESTED, fetchBulletins)
}

export default bulletinSaga;