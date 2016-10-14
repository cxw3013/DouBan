/**
 * Created by cxw on 16/10/12.
 */

'use strict';

import React, {PropTypes, Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        width: 40,
        textAlign: 'center'
    }
});

class Counter extends Component {
// 构造
    constructor(props) {
        super(props);

        // 初始状态
        this.state = {};
    }

    static propTypes = {
        decrementFn: PropTypes.func.isRequired,
        incrementFn: PropTypes.func.isRequired,
        incrementWithDelayFn:PropTypes.func.isRequired,
        children: PropTypes.number.isRequired

    };


    render() {
        const {decrementFn, children, incrementFn, incrementWithDelayFn} = this.props;
        return (
            <View style={styles.container}>
                <Button onPress={decrementFn} text="-"/>
                <Text style={styles.label}>{children}</Text>
                <Button onPress={incrementFn} text="+"/>
                <Button onPress={incrementWithDelayFn} text="D+"/>
            </View>
        )
    };
}

export default Counter;

