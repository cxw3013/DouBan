
"use strict";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducers from '../reducers/rootReducers';
import thunk from 'redux-thunk';

import createLogger from 'redux-logger';

//增加middlewares,增加一个Log输出
const middlewares = [];
const logger = createLogger();
middlewares.push(logger);
middlewares.push(thunk);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default (initialState) => {
    return createStoreWithMiddleware(rootReducers, initialState);
    //return createStore(rootReducers);
};