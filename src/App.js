/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';


import AppNav from './nav/AppNav';


export default class BestPracticesRN extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <AppNav
                screenProps={{navigation: this.props.navigation}}
                style={{flex: 1,}}/>
        );
    }
}


AppRegistry.registerComponent('BestPracticesRN', () => BestPracticesRN);