/**
 * Created by Rookie on 2017/7/20.
 */

import React from 'react';

import {TabNavigator} from 'react-navigation';


import Movie from '../page/MoviePage';
import Music from '../page/MusicPage';
import Book from '../page/BookPage';

const HomeNav = TabNavigator({
    Movie: {
        screen: Movie,
        navigationOptions: {
            tabBarLabel: 'Movie',
        },
    },
    Music: {
        screen: Music,
        navigationOptions: {
            tabBarLabel: 'Music',
        },
    },
    Book: {
        screen: Book,
        navigationOptions: {
            tabBarLabel: 'Book'
        }
    }
}, {
    lazy: true,
    initialRouteName: 'Movie',
    tabBarPosition: 'bottom',//tabbar放在底部
    swipeEnabled: false,//不能滑动切换
    animationEnabled: false,//不要切换动画
    tabBarOptions: {
        indicatorStyle: {
            height: 0,
        },

        activeTintColor: '#33BC61',
        inactiveTintColor: 'black',
        style: {backgroundColor: 'white', borderTopColor: 'black', borderTopWidth: 0.15},
    },


});


export default HomeNav;

