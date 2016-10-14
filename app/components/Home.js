import React, {Component} from 'react';

import Music from './Music'
import HomeDetail from './HomeDetail'
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    BackAndroid,
    Platform,
    TouchableOpacity,
} from 'react-native';


const defaultRoute = {
    component: HomeDetail,
    rightButtonName:'确定',
    rightBtnPressed:()=>{console.log("rightBtn Pressed")},
    params:{

    }
}

class Home extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._renderScene = this._renderScene.bind(this);
        this._renderNavBar = this._renderNavBar.bind(this);
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component route = {route}
                navigator={navigator}/>
        );
    }

    _renderNavBar() {
        const styles = {
            title: {
                flex: 1, alignItems: 'center', justifyContent: 'center'
            },
            button: {
                flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
            },
            buttonText: {
                fontSize: 18, color: '#FFFFFF', fontWeight: '400'
            }
        }

        let routeMapper = {
                LeftButton(route, navigator, index, navState) {
                    if (index > 0) {
                        return (
                            <TouchableOpacity
                                onPress={() => navigator.pop()}
                                style={ styles.button}
                            >
                                <Text style={styles.buttonText}>
                                    返回
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                    // else {
                    //     return (
                    //         null
                    //     );
                    // }
                },
                RightButton(route, navigator, index, navState) {
                    if ( route.rightButtonName) {
                        return (
                            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity
                                    onPress={() => route.rightBtnPressed()}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>{route.rightButtonName}</Text>
                                </TouchableOpacity>
                            </View>

                        );
                    } else {
                        return null
                    }

                },
                Title(route, navigator, index, navState) {
                    return (
                        <View style={styles.title}>
                            <Text style={styles.buttonText}>{route.title ? route.title : 'Home'}</Text>
                        </View>
                    );
                }
            };
        return(
            <Navigator.NavigationBar
                style={{
          alignItems: 'center',
          backgroundColor: '#55ACEE',
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#55ACEE',
          shadowOpacity: 0.8,
          }}
                routeMapper = {routeMapper}
            />
        );
    };


    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                navigationBar={this._renderNavBar()}
                sceneStyle={{paddingTop:Platform.OS === 'android' ? 66 :74}}
            >
            </Navigator>
        );
    }
}

export default Home;