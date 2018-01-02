import {connect} from 'react-redux'
import HomeComponent from '../Component/Home';
import {fetchMoviesAction, addMoviesAction, fetchCountryAction, fetchaDDAction} from "../store/actions";

//propsa yüklenecek değişkenler state'ler
const mapStateToProps = (state) => {
    console.log('props', state);
    return {
        movies: state.MovieReducers,
        country: state.CounterReducers
    };
};

//Props'a yüklenecek Fonksiyonlar
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction())
        },

        onAddMovie: (newMovie) => {
            dispatch(addMoviesAction(newMovie))
        },
        onFetchCountry: () => {
            dispatch(fetchCountryAction())
        },
        onPostData: () => {
            dispatch(fetchaDDAction())
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);