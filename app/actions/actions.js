"use strict";
import * as types from '../constants/constants'

export const increment = (id) => {
    return {
      type:types.INCREMENT,
        payload:{
            id
        }
    }
}

export const decrement = (id) => {
    return{
        type:types.DECREMENT,
        payload:{
            id
        }
    }
}

export const newCounter = () => {
    return {
        type:types.ADD_NEW_COUNTER
    }
}

