import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';


class LoadingView extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    size="large"
                    color="#3e9ce9">
                </ActivityIndicator>
                <Text style={styles.loadingText}>
                    数据加载中....
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
});
export default LoadingView;
