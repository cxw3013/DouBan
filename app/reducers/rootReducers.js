"use strict";

import {combineReducers} from 'redux';
//import {addNewCounter, increment, decrement}  from './reducers';

import {counterReducres}  from './reducers';

const rootReducers = combineReducers({
    counterReducres
});

export default rootReducers;