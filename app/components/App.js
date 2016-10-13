import React, {Component} from 'react';
import TabNavigator from  'react-native-tab-navigator';

import Home from './Home';
import Video from './Video';
import Music from './Music';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


const HOME = 'home';
const TAB_HOME_NORMAL = require('../images/tabs/home_normal.png');
const TAB_HOME_FOCUS = require('../images/tabs/home_focus.png');

const VIDEO = 'video';
const TAB_VIDEO_NORMAL = require('../images/tabs/faxian_normal.png');
const TAB_VIDEO_FOCUS = require('../images/tabs/faxian_focus.png');

const MUSIC = 'music';
const TAB_MUSIC_NORMAL = require('../images/tabs/personal_normal.png');
const TAB_MUSIC_FOCUS = require('../images/tabs/personal_focus.png');


class App extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: HOME
        };
        this._renderTabItem = this._renderTabItem.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tabNavigator}
                              hidesTabTouch={true}>
                    {this._renderTabItem(TAB_HOME_NORMAL, TAB_HOME_FOCUS, HOME, <Home/>)}
                    {this._renderTabItem(TAB_VIDEO_NORMAL, TAB_VIDEO_FOCUS, VIDEO, <Video/>)}
                    {this._renderTabItem(TAB_MUSIC_NORMAL, TAB_MUSIC_FOCUS, MUSIC, <Music/>)}
                </TabNavigator>
            </View>
        );
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                //title = {tag}
                renderIcon={() => <Image style={
                tag === VIDEO ?
                styles.tabNavigatorIcon : styles.tabNavigatorIcon }
                source={img}/>}
                renderSelectedIcon={() => <Image style={
                tag === VIDEO ?
                styles.tabNavigatorIcon : styles.tabNavigatorIcon}
                  source={selectedImg}/>}
                onPress={() => this.setState({selectedTab:tag})}
                //badgeText='1'
                // renderBadge={() =>  <View style={
                //     tag === VIDEO ? styles.redMiddlePoint : styles.redPoint}/> }
            >
                {childView}
            </TabNavigator.Item>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabNavigator: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    tabNavigatorIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 10
    },

    redPoint: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        marginTop: 20
    },

    tabNavigatorMiddleIcon: {
        width: 35,
        height: 50,
        resizeMode: 'stretch',
        marginTop: -8
    },
    redMiddlePoint: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        marginTop: -8
    },
});

export default App;