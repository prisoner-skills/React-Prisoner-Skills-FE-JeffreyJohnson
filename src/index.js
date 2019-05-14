import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from './logger';
import {postsReducer,usersReducer} from './reducers/index';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Authenticate from './components/Authenticate/Authenticate';


//const store = createStore(combineReducers({}), applyMiddleware(thunk,logger))
const store = createStore(combineReducers({postsReducer, usersReducer}), applyMiddleware(thunk, logger));
const rootElement=document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>,rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
