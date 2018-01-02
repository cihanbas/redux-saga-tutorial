import {FETCH_FAILED, ADD_MOVIES, FETCH_SUCCESS, SUCCESS_COUNTRY} from '../actions/actionTypes';

const CounterReducers = (movie = [], action) => {
    switch (action.type) {
        case SUCCESS_COUNTRY:
            return [action.receivedCountry];
        case FETCH_FAILED:
            return [];
        case ADD_MOVIES:
            return [...movie, action.newMovie];

        default :
            return movie;
    }
};
export default CounterReducers;