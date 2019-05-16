import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers}from'redux';
import {Provider}from'react-redux';
import thunk from 'redux-thunk';
import reducers from'./reducers/index.js';
import {logger} from './logger';

let store = createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(
<Provider store={store}>
        <Router>
            <App />
        </Router>
</Provider>
, document.getElementById(`root`)
);