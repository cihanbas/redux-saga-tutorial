import {
    FETCH_FAILED,
    FETCH_MOVIES,
    FETCH_SUCCESS,
    FETCH_COUNTRY,
    SUCCESS_COUNTRY,
    FETCH_POST,
    POST_SUCCESS
} from '../store/actions/actionTypes';
import {put, takeEvery} from 'redux-saga/effects';
import {Api} from './api';

function* fetchMovies() {
    try {

        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({
            type: FETCH_SUCCESS,
            receivedMovies
        })
    }
    catch (err) {
        yield put({
            type: FETCH_FAILED,
            err
        })
    }
}

function* fetchCountry() {
    try {

        const receivedCountry = yield Api.getCountryFromApi();
        yield put({
            type: SUCCESS_COUNTRY,
            receivedCountry
        })
    }
    catch (err) {
        yield put({
            type: FETCH_FAILED,
            err
        })
    }
}


function* fetchPost() {
    try {
        const receivedPosts = yield Api.getPostApi();
        console.log(receivedPosts)
        yield put({
            type: POST_SUCCESS,
            receivedPosts
        })
    }
    catch (err) {
        yield put({
            type: FETCH_FAILED,
            err
        })
    }
}


export function* watchFetchMovies() {
    yield takeEvery(FETCH_MOVIES, fetchMovies);
}

export function* watchFetchCountry() {
    yield takeEvery(FETCH_COUNTRY, fetchCountry);
}

export function* watchFetchPost() {
    yield takeEvery(FETCH_POST, fetchPost);
}