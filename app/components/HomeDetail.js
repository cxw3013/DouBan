'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Button, Counter, Counters} from './common';
import * as actions from '../actions/actions';
import * as actionsWeather from '../actions/actionWeather';
import { addNewCounter, increment, decrement }  from '../reducers/reducers';
import { weatherReducres } from '../reducers/reduceWeather';
import LoadingView from '../utils/LoadingView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    text:{
        color:'red'
    }
});

const renderCounters = (counters, decrement, increment, incrementWithDelay) => {
    return Object.keys(counters).map((id) => {
        const value = counters[id];
        return (
            <Counter
                key={id}
                decrementFn={() => decrement(id)}
                incrementFn={() => increment(id)}
                incrementWithDelayFn={()=>incrementWithDelay(id)}
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
        weather('123');
    };

    render() {

        const {
            addNewCounter,
            counters,
            decrement,
            increment,
            incrementWithDelay
        } = this.props;

        const {
            fetching,
            content,
            weather
        } = this.props;

        if (fetching) {
            return (<LoadingView/>)
        }

        return (
            <View style={styles.container}>
                <Counters addFn = {addNewCounter}>
                    {renderCounters(counters, decrement, increment, incrementWithDelay)}
                </Counters>
                <Button onPress={weather} text="请求网络"/>
                <Text style={styles.text}>
                    {content}
                </Text>
            </View>
        )
    }
}

//原型: mapStateToProps(state, ownProps) : stateProps
//作用: 将 store 中的数据作为 props 绑定到组件上

//当 state 变化，或者 ownProps 变化的时候，
//mapStateToProps 都会被调用，计算出一个新的 stateProps ，
//（在与 ownProps merge 后）更新给 MyComp 。
const mapStateToProps = (state) => {
    return {
        counters:state.counterReducres.counters,
        fetching:state.weatherReducres.fetching,
        content:state.weatherReducres.content
    };
};

//原型: mapDispatchToProps(dispatch, ownProps): dispatchProps

//作用: 将 action 作为 props 绑定到 MyComp 上。
const mapDispatchToProps = (dispatch) => {
    //两种写法

    //1. 原始的写法,最底层的写法
    // return {
    //     addNewCounter:() => dispatch(actions.newCounter()),
    //     increment:(...agrs) => dispatch(actions.increment(...agrs)),
    //     decrement:(...agrs) => dispatch(actions.decrement(...agrs))
    // };

    //2. 包装后的写法,简单很多
    return bindActionCreators({
        addNewCounter: actions.newCounter,
        increment: actions.increment,
        decrement: actions.decrement,
        incrementWithDelay:actions.incrementWithDelay,
        weather:actionsWeather.getWeather
    }, dispatch);
};

/*
原型:
 connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

 Provider 内的任何一个组件（比如这里的 HomeDetail ），
 如果需要使用 state 中的数据，就必须是「被 connect 过的」组件——使用 connect 方法
 对「你编写的组件（ HomeDetail ）」进行包装后的产物。
*/
export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail);
