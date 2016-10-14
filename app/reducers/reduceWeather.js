/**
 * Created by cxw on 16/10/13.
 */

'use strict';
import * as types from '../constants/constants';

const initialState = {
    fetching:false,
    content:'初始数据'
};

export let weatherReducres = (state = initialState, action) => {
    switch (action.type) {
        case types.WEATHER_BEGIN_FETCH: {
            return {
                ...state,
                fetching:true
            };
        }
        case types.WEATHER_END_FETCH:{
            return{
                ...state,
                fetching:false,
                content:action.content
            }
        }
        default:
            return state;
    }
};