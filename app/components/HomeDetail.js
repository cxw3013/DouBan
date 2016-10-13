'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Button, Counter, Counters} from './common';
import * as actions from '../actions/actions';
import {addNewCounter, increment, decrement}  from '../reducers/reducers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

const renderCounters = (counters, decrement, increment) => {
    return Object.keys(counters).map((id) => {
        const value = counters[id];
        return (
            <Counter
                key={id}
                decrementFn={() => decrement(id)}
                incrementFn={() => increment(id)}
            >
                {value}
            </Counter>
        )
    })
};

class HomeDetail extends Component {
    // 构造
    constructor(props) {
        super(props);


        // 初始状态
        this.state = {};
        this._onPress = this._onPress.bind(this);
    }



    _onPress = () => {
        console.log('点击了...');
    };

    render() {

        const {
            addNewCounter,
            counters,
            decrement,
            increment
        } = this.props;

        return (
            <View style={styles.container}>
                <Counters addFn = {addNewCounter}>
                    {renderCounters(counters, decrement, increment)}
                </Counters>
            </View>
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //         Welcome to React Native!
            //     </Text>
            //     <Button
            //         //text='按钮...'
            //         onPress={this._onPress}
            //     />
            //     <Text style={styles.instructions}>
            //         To get started,edit index.ios.js
            //     </Text>
            // </View>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        counters:state.counterReducres.counters};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addNewCounter: actions.newCounter,
        increment: actions.increment,
        decrement: actions.decrement
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail);


/*
const mapStateToProps = (state) => {
    return  {
        state:state,
        counters:state.addNewCounter.counters};
};

const mapDispatchToProps = (dispatch) => {
    //const readActions = bindActionCreators(readCreators, dispatch);
    return bindActionCreators({
        addNewCounter: actions.newCounter,
        increment: actions.increment,
        decrement: actions.decrement
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail);
*/