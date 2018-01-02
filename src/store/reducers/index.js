import {combineReducers} from 'redux';
import MovieReducers from './movieReducers';
import CounterReducers from './countryReducer';
import PostsReducers from './postsReducer';

const allReducers = combineReducers({
    MovieReducers,
    CounterReducers,
    PostsReducers

});
export default allReducers;