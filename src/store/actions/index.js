import { FETCH_FAILED, ADD_MOVIES, FETCH_MOVIES, FETCH_SUCCESS ,FETCH_COUNTRY,FETCH_POST,SUCCESS_COUNTRY} from "./actionTypes";

export const fetchMoviesAction = () => {
    console.log("red")
    return {
        type: FETCH_MOVIES,
    }
};
export const addMoviesAction = (newMovie) => {
    return {
        type: ADD_MOVIES,
        newMovie
    }
};
export const fetchSuccessAction= (receivedMovies) => {
    return {
        type: FETCH_SUCCESS,
        receivedMovies
    }
};
export const fetchFailed= (err) => {
    return {
        type: FETCH_FAILED,
        err
    }
};
export const fetchCountryAction = () => {
    return {
        type: FETCH_COUNTRY,
    }
};
export const fetchaDDAction = () => {
    return {
        type: FETCH_POST,
    }
};
