"use strict";
import * as types from '../constants/constants'

//我们可以通过创建函数来生产 action，这类函数统称为 Action Creator
export const increment = (id) => {
    return {
      type:types.INCREMENT,
        payload:{
            id
        }
    }
};

export const decrement = (id) => {
    return{
        type:types.DECREMENT,
        payload:{
            id
        }
    }
};

export const newCounter = () => {
    return {
        type:types.ADD_NEW_COUNTER
    }
};

export  const  incrementWithDelay = (id) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            dispatch({
                type:types.INCREMENT,
                payload:{
                    id
                }
            })
        }, 1000)
    }
};



