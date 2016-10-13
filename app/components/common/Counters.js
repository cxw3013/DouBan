/**
 * Created by cxw on 16/10/12.
 */

'use strict';

import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Counter from './Counter'
import Button from './Button'

const styles = StyleSheet.create({
   container:{
       justifyContent:'center',
       alignItems:'center'
   }
});

class Counters extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    
    static propTypes = {
        children:PropTypes.arrayOf(React.PropTypes.node).isRequired,
        addFn:PropTypes.func.isRequired
    };

    render(){
        const { children, addFn } = this.props;
        return(
            <View style={styles.container}>
                {children}
                <Button onPress={addFn} text="Add New Counter"/>
            </View>
        )
    };
}

export default Counters