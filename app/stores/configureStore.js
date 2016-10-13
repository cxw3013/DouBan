
"use strict";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducers from '../reducers/rootReducers';
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk);

export default () => {
    return createStore(rootReducers);

};