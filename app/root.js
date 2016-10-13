import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';

import App from './components/App'

const  store = configureStore();
export  default  Root = () => (
    <Provider store = {store}>
        <App/>
    </Provider>
);