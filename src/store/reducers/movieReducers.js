import {FETCH_FAILED, ADD_MOVIES, FETCH_SUCCESS} from '../actions/actionTypes';

const movieReducers = (movie = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return [action.receivedMovies];
        case FETCH_FAILED:
            return [];
        case ADD_MOVIES:
            return [...movie, action.newMovie];

        default :
            return movie;
    }
};
export default movieReducers;