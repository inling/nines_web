import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user/reducer';
import article from './article/reducer';

import { routerMiddleware } from 'react-router-redux';
let createHistory = require('history').createHashHistory;
let history = createHistory();
let routerWare = routerMiddleware(history);

const reducers = combineReducers({
    user,
    article 
})
let store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk, routerWare)
))
export default store;