import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/root';
import allReducers from './store/reducers';
import Home from './container/HomeContainer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

class App extends Component {
    render() {
        return (
            <Provider className="App" store={store}>
                <Home/>
            </Provider>
        );
    }
}

sagaMiddleware.run(rootSaga);
export default App;
