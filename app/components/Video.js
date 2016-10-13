
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Video extends Component {
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
                    测试Video
                </Text>
            </View>
        );
    }
}

export default Video;