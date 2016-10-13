"use strict";
import * as types from '../constants/constants';

const initialState = {
    idGen: 0,
    counters: {}
};

export let counterReducres = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_COUNTER:{
            const {idGen} = state;
            const newId = idGen + 1;

            return {
                idGen: newId,
                counters: {
                    ...state.counters,
                    [newId]: 0
                }
            };
        }
        case types.INCREMENT:{
            const {payload:{id}} = action;
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [id]: state.counters[id] + 1
                }
            };
        }
        case types.DECREMENT:{
            const {payload:{id}} = action;
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [id]: state.counters[id] - 1
                }
            };
        }
        default:
            return state;
    }
}
/*
export let addNewCounter = (state = initialState, action) => {
    if (action.type == types.ADD_NEW_COUNTER) {
        const {idGen} = state;
        const newId = idGen + 1;

        return {
            idGen: newId,
            counters: {
                ...state.counters,
                [newId]: 0
            }
        };
    }
    return state;
};

export let increment = (state = initialState, action) => {
    if (action.type == types.INCREMENT) {
        const {payload:{id}} = action;
        return {
            ...state,
            counters: {
                ...state.counters,
                [id]: state.counters[id] + 1
            }
        };

        // return Object.assign({}, state, {
        //     contains:{
        //         [id]:state.counters[id] + 1
        //     }
        // });
    }
    return state;
};

export let decrement = (state = initialState, action) => {
    if (action.type == types.DECREMENT) {
        const {payload:{id}} = action;
        return {
            ...state,
            counters: {
                ...state.counters,
                [id]: state.counters[id] - 1
            }
        };

        // return Object.assign({}, state, {
        //     contains:{
        //         [id]:state.counters[id] - 1
        //     }
        // });
    }
    return state;
};
*/