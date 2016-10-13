import React from 'react';
import LoadingView from '../utils/LoadingView';


import {
    Dimensions,
    PixelRatio
} from 'react-native';

export const pixel = 1;
export let screenSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};

export const get = (url, successCallback, failCallback) => {
    fetch(url).then(
        (response) => response.text()
    ).then(
        responseText => {
            successCallback(JSON.parse(responseText));
        }
    ).catch(
        (error) => {
            failCallback(error);
        });
};

//export let loading = <LoadingView/>;
