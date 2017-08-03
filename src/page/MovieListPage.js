/**
 * Created by Rookie on 2017/8/3.
 */

import React, {Component} from 'react';

import {View, StyleSheet, Text, ToastAndroid} from 'react-native';

import {TabNavigator} from 'react-navigation'
import ToolBar from "../components/ToolBar";

import MovieNow from './MovieTabPageNow';
import MovieFuture from './MovieTabPageFuture';


export default class MovieListPage extends Component {


    render() {

        let type = this.props.navigation.state.params.type;

        let showfirst = type == "Now";


        let navigation = this.props.navigation;

        return (
            <View style={styles.container}>
                <ToolBar
                    onTab={false}
                    title="院线电影"
                    type="Movie"
                    navigation={navigation}
                />

                {showfirst ? (<MovieNav1 screenProps={{appNavigation: this.props.navigation,}}
                />) : (<MovieNav2 screenProps={{appNavigation: this.props.navigation,}}
                />)}

            </View>
        )
    }


}


const MovieNav1 = TabNavigator({
    Now: {
        screen: MovieNow
    },
    Future: {
        screen: MovieFuture
    }
}, {
    lazy: true,
    initialRouteName: 'Now',
    tabBarPosition: 'top',//tabbar放在顶部
    tabBarOptions: {
        indicatorStyle: {
            height: 0.5,
            backgroundColor: 'black',
        },
        activeTintColor: '#66b219',
        inactiveTintColor: 'black',
        style: {backgroundColor: 'white', borderTopColor: 'white', borderTopWidth: 1},
    },


});
const MovieNav2 = TabNavigator({
    Now: {
        screen: MovieNow
    },
    Future: {
        screen: MovieFuture
    }
}, {
    lazy: true,
    initialRouteName: 'Future',
    tabBarPosition: 'top',//tabbar放在顶部
    tabBarOptions: {
        indicatorStyle: {
            height: 0.5,
            backgroundColor: 'black',
        },
        activeTintColor: '#66b219',
        inactiveTintColor: 'black',
        style: {backgroundColor: 'white', borderTopColor: 'white', borderTopWidth: 1},
    },


});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
