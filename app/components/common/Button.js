'use strict';
import React, {PropTypes, Component,} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        height: 20,
        padding: 20,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    text: {
        textAlign:'center',
        color:'red',
    }
});

class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    };

    // 入参类型验证
    static propTypes = {
        containerStyle:View.propTypes.style,
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        textStyle: View.propTypes.style,
        text: PropTypes.string,
        activeOpacity: PropTypes.number
    };

    static defaultProps = {
        onPress(){
        },
        disabled: false,
        activeOpacity: 0.8,
        text:'默认按钮',
        containerStyle:styles.button,
        textStyle:styles.text
    };

    render() {
        const {onPress, disabled, activeOpacity, text, textStyle} = this.props;
        return (
            < TouchableOpacity
                style={styles.button}
                onPress={onPress}
                 disabled={disabled}
                 activeOpacity={activeOpacity}
            >
                < Text
                     style={textStyle}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;