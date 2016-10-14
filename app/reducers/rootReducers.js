"use strict";

import {combineReducers} from 'redux';
//import {addNewCounter, increment, decrement}  from './reducers';

import {counterReducres}  from './reducers';
import {weatherReducres} from './reduceWeather';

const rootReducers = combineReducers({
    counterReducres,
    weatherReducres
});

export default rootReducers;