import {POST_SUCCESS} from '../actions/actionTypes';

const CounterReducers = (movie = [], action) => {
    switch (action.type) {
        case POST_SUCCESS:
            return [action.receivedPosts];

        default :
            return movie;
    }
};
export default CounterReducers;