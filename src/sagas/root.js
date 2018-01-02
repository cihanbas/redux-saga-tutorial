import {fork} from 'redux-saga/effects';
import {watchFetchMovies, watchFetchCountry, watchFetchPost} from "./sagas";

export default function* movieSaga() {
    yield    [
        fork(watchFetchMovies),
        fork(watchFetchPost),
        fork(watchFetchCountry)
    ]

}

