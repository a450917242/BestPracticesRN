/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';


import AppNav from './nav/AppNav';


export default class App extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <AppNav screenProps={{navigation: this.props.navigation}}/>
        );
    }
}


AppRegistry.registerComponent('BestPracticesRN', () => App);