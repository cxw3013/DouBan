
import React, {Component} from 'react';
import * as Util2 from '../utils/Util';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Music extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>
                    {'测试Music' + Util2.screenSize.width }
                </Text>
            </View>
        );
    }
}

export default Music;