import { takeEvery, put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';

import { API_BASE_URL, BULLETIN_ENDPOINT } from './const';
import { addBulletin, removeBulletin, setBulletins, setFormOpen, updateBulletin } from './reducer';

export const BULLETIN_FETCH_REQUESTED = "BULLETIN_FETCH_REQUESTED";
export const BULLETIN_POST_REQUESTED = 'BULLETIN_POST_REQUESTED';
export const BULLETIN_DELETE_REQUESTED = 'BULLETIN_DELETE_REQUESTED';
export const BULLETIN_PATCH_REQUESTED = 'BULLETIN_PATCH_REQUESTED';

function* fetchBulletins() {
    try {
        const res = yield call(axios.get, API_BASE_URL + BULLETIN_ENDPOINT)
        if (res.status && res.status == 200 && res?.data?.results && Array.isArray(res.data.results)) {
            yield put(setBulletins(res.data.results))
        } else {
            console.log("failed to fetch bulletins")
        }
    } catch (err) {
        console.log("failed to make bulletin get request")
    }
}

function* postBulletin(event) {
    if (!event || !event.formData || !event.formData.title || !event.formData.content) {
        console.log("invalid bulletin payload")
    }

    try {
        const res = yield call(axios.post, API_BASE_URL + BULLETIN_ENDPOINT, event.formData)
        if (res.status && res.status == 201) {
            console.log('result: ' + JSON.stringify(res))

            // validate bulletin result
            if (
                res?.data?.title &&
                res?.data?.content &&
                res?.data?.id
            ) {
                yield put(addBulletin(res.data))
                yield put(setFormOpen({ isOpen: false }))
            } else {
                console.log("invalid bulletin result. put noti here")
            }
        }
    } catch (err) {
        console.log(err)
    }
}

function* deleteBulletin(event) {
    if (!event.bulletinId) {
        console.log("required bulletin id to delete")
    }

    try {
        const res = yield call(axios.delete, API_BASE_URL + BULLETIN_ENDPOINT + "/" + event.bulletinId)
        if (res.status && res.status == 204) {
            yield put(removeBulletin(event.bulletinId))
        }
    } catch (err) {
        console.log(err)
    }
}

function* patchBulletin(event) {
    if (!event.formData || !event.formData.id) {
        console.log("required bulletin id to delete")
    }

    console.log(event.formData)

    try {
        const res = yield call(axios.patch, API_BASE_URL + BULLETIN_ENDPOINT + "/" + event.formData.id, event.formData)
        if (res.status && res.status == 200) {
            // validate bulletin result
            if (
                res?.data?.title &&
                res?.data?.content &&
                res?.data?.id
            ) {
                yield put(updateBulletin(res.data))
                yield put(setFormOpen({ isOpen: false }))
            } else {
                console.log("invalid bulletin result. put noti here")
            }
        }
    } catch (err) {
        console.log(err)
    }
}

function* bulletinSaga() {
    yield takeEvery(BULLETIN_FETCH_REQUESTED, fetchBulletins)
    yield takeLeading(BULLETIN_POST_REQUESTED, postBulletin)
    yield takeLeading(BULLETIN_DELETE_REQUESTED, deleteBulletin)
    yield takeLeading(BULLETIN_PATCH_REQUESTED, patchBulletin)
}

export default bulletinSaga;