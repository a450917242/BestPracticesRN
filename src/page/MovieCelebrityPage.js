/**
 * Created by Rookie on 2017/7/24.
 */


import React, {Component} from 'react';

import {View, WebView,StyleSheet,Text} from 'react-native';

import Api from '../util/Api';

let data = require('../localdata/only.json');

export default class MovieCelebrityPage extends Component {

    constructor(props) {
        super(props);

        let id = this.props.navigation.state.params.id;

        this.state = {
            url: 'https://api.douban.com/v2/movie/celebrity/' + id,
            data: '',
            done: false,
            mobile_url: '',
        };

    }

    componentDidMount() {
        Api.Get(this.state.url, null, this._success, this._error)

    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);



        this.setState({
            data: resData,
            done: true,
            mobile_url:resData.mobile_url,

        })
    };


    _error = (resData) => {
        console.log('失败');
        console.log(resData);

        ToastAndroid.show("请求数据失败", ToastAndroid.SHORT);


        let temps = [];

        data.directors.map(function (director) {
            temps.push(director)
        })

        data.casts.map(function (cast) {
            temps.push(cast);
        });


        this.setState({
            data: data,
            done: true,
            subjects: temps,


        })


    }


    render() {

        if (!this.state.done) {
            return (
                <View style={styles.container}>
                    <Text>loading</Text>
                </View>
            )
        } else {

            return (
                    <View style={{flex:1,backgroundColor: 'white'}}>
                        <WebView
                            showsVerticalScrollIndicator={false}
                            source={{uri:this.state.mobile_url}}
                        />
                    </View>

            )

        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});