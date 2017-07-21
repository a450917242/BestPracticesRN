/**
 * Created by Rookie on 2017/7/21.
 */


import React, {Component} from 'react';

import {View, Text, Image, StyleSheet, ToastAndroid, ScrollView} from 'react-native';

import HorizontalSimpleView from '../components/HorizontalSimpleView';
import Api from '../util/Api';

let data = require('../localdata/only.json');

export default class MovieDetailPage extends Component {

    constructor(props) {
        super(props);

        let id = this.props.navigation.state.params.id;

        this.state = {
            url: 'https://api.douban.com/v2/movie/subject/' + id,
            data: '',
            done: false,
            subjects: [],
        };

    }

    componentDidMount() {
        Api.Get(this.state.url, null, this._success, this._error)

        // this._error();
    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        let temps = [];

        resData.directors.map(function (director) {
            temps.push(director)
        })

        resData.casts.map(function (cast) {
            temps.push(cast);
        });


        this.setState({
            data: resData,
            done: true,
            subjects: temps,


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
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View
                        style={{height: 300, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{height: 260, width: 200}} source={{uri: this.state.data.images.large}}/>
                    </View>
                    <View style={{backgroundColor: 'white'}}>
                        {/*信息*/}
                        <View style={{margin: 10, flexDirection: 'row'}}>
                            <View style={{flex: 3}}>
                                <Text style={{
                                    textAlign: 'left',
                                    color: 'black',
                                    fontWeight: 'normal',
                                    fontSize: 18,
                                    marginTop: 2
                                }}>{this.state.data.title}</Text>

                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginTop: 5}}>{this.state.data.year}</Text>
                                    {this.state.data.genres.map(function (gener) {
                                        return <Text style={{marginTop: 5}} key={gener}>/{gener}</Text>
                                    })}
                                </View>


                            </View>
                            <View style={{flex: 1}}>

                            </View>
                        </View>
                        {/*summary*/}
                        <Text style={{
                            textAlign: 'left',
                            fontWeight: 'normal',
                            fontSize: 12,
                            marginLeft: 10
                        }}>简介</Text>
                        <Text style={{
                            textAlign: 'left',
                            color: 'black',
                            fontWeight: 'normal',
                            fontSize: 15,
                            margin: 10
                        }}>{data.summary}</Text>
                        <Text style={{
                            textAlign: 'left',
                            fontWeight: 'normal',
                            fontSize: 12,
                            marginLeft: 10,
                            marginTop: 10,
                        }}>影人</Text>

                        <HorizontalSimpleView subjects={this.state.subjects}/>
                    </View>

                </ScrollView>
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