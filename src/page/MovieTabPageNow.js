/**
 * Created by Rookie on 2017/8/3.
 */

import React, {Component} from 'react';


import {View, StyleSheet, Text, ToastAndroid} from 'react-native';

import VerticalListView from "../components/VerticalListView";

let in_threaters_data = require('../localdata/in_theaters.json');
let coming_soon_data = require('../localdata/coming_soon.json');


export default class MovieTabPageNow extends Component {


    constructor(props) {
        super(props);

        this.state = {
            url_in_theaters: 'https://api.douban.com/v2/movie/in_theaters',
            url_coming_soon: 'https://api.douban.com/v2/movie/coming_soon',
            Data: [],
            done: false,
        };
    }


    componentDidMount() {

        // Api.Get(this.state.url_in_theaters, null, this._success, this._error);

        this._error();

    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        this.setState({
            Data: resData.subjects,
            done: true,
        });


    };


    _error = (resData) => {

        console.log('失败');
        console.log(resData);

        ToastAndroid.show("请求数据失败-1", ToastAndroid.SHORT);


        this.setState({
            Data: in_threaters_data.subjects,
            done: true,
        })
    }


    render() {

        let appNavigation = this.props.screenProps.appNavigation;


        if (this.state.done) {

            return ( <VerticalListView showIndex={false} subjects={this.state.Data } navigation={appNavigation}/>)
        } else {
            return (<View>
                <Text>loading</Text>
            </View>)
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});