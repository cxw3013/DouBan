/**
 * Created by cxw on 16/10/13.
 */

'use strict';

import * as types from '../constants/constants'
import {toastShort} from '../utils/ToastView'

export const getWeather = (city) => {

    return ((dispatch) => {
        dispatch(fetchBeginWeatherList());
        return fetch('http://www.pm25.in/api/querys/station_names.json?city=zhuhai&token=5j1znBVAsnSf5xQyNQyq')
            .then(
                (response) => response.json()
            )
            .then((responseJSON) => {

                console.log(responseJSON);
                let value =  JSON.stringify(responseJSON);
                dispatch(receiveWeatherList(value));
            })
            .catch((error) => {
                console.warn(error);
                toastShort('网络发生错误,请重试');
                dispatch(receiveWeatherList('错误了'));
            })
    });
};

export let fetchBeginWeatherList = () => {
    return {
        type:types.WEATHER_BEGIN_FETCH
    };
};

export let receiveWeatherList = (jsonString) => {
  return {
      type:types.WEATHER_END_FETCH,
      content:jsonString
  }
};