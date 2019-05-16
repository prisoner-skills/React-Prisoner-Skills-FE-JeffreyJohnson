import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers}from'redux';
import {Provider}from'react-redux';
import thunk from 'redux-thunk';
import {postsReducer,usersReducer}from'./reducers/index';
import {logger} from './logger';

const store = createStore(combineReducers({postsReducer, usersReducer}), applyMiddleware(thunk, logger));
ReactDOM.render(
<Provider store={store}>
        <Router>
            <App />
        </Router>
</Provider>
, document.getElementById(`root`)
);