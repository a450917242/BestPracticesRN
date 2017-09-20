/**
 * Created by Rookie on 2017/7/24.
 */


import React, {Component} from 'react';

import {View, WebView, StyleSheet, Text, ToastAndroid} from 'react-native';

import Api from '../util/Api';
import ToolBar from "../components/ToolBar";


export default class SubjectDetailPage extends Component {


    render() {

        let navigation = this.props.navigation;


        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ToolBar
                    onTab={false}
                    title={this.props.navigation.state.params.name}
                    type="Movie"
                    navigation={navigation}
                />

                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{uri: this.props.navigation.state.params.url}}
                />
            </View>

        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});