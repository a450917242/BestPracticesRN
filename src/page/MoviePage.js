/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ToastAndroid,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Api from '../util/Api';

const screenWidth = Dimensions.get('window').width;

import HorizontalListView from '../components/HorizontalListView';
import HorizontalCardView from '../components/HorizontalCardView';
import NavigationItem from '../components/NavigationItem';


let in_threaters_data = require('../localdata/in_theaters.json');
let coming_soon_data = require('../localdata/coming_soon.json');
let selected_collections_data = require('../localdata/selected_collections.json')


export default class MoviePage extends Component {


    constructor(props) {
        super(props);


        this.state = {
            url_in_theaters: 'https://api.douban.com/v2/movie/in_theaters',
            url_coming_soon: 'https://api.douban.com/v2/movie/coming_soon',
            in_theaters_subjects: [],
            coming_soon_subjects: [],
            selected_collections: [],
            done: false,
        };

    }


    componentDidMount() {
        // this.getTheaterData();
        // this.getComingSoonData();


        // Api.Get(this.state.url_in_theaters, null, this.in_theaters_success, this._error)
        // Api.Get(this.state.url_coming_soon, null, this.coming_soon_success, this._error)

        this._error();
    }

    getComingSoonData() {
        fetch(this.state.url_coming_soon)
            .then(res => res.json())
            .then(resData => {
                console.log("aaaaaaaaaaaaaaa=" + resData);
                this.coming_soon_success(resData);
            }).catch(error => {
            this._error(error);
        })
    }

    getTheaterData() {
        fetch(this.state.url_in_theaters)
            .then(res => res.json())
            .then(resData => {
                console.log("bbbbbbbbbbbbbb=" + resData);
                this.in_theaters_success(resData);
            }).catch(error => {
            this._error(error);
        });
    }


    in_theaters_success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        this.setState({
            in_theaters_subjects: resData.subjects,
            done: true,

        });


    };
    coming_soon_success = (resData) => {
        console.log('成功');
        console.log(resData.count);
        this.setState({
            coming_soon_subjects: resData.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
            done: true,
        })
    };


    _error = (resData) => {

        console.log('失败');
        console.log(resData);

        ToastAndroid.show("请求数据失败", ToastAndroid.SHORT);


        this.setState({
            in_theaters_subjects: in_threaters_data.subjects,
            coming_soon_subjects: coming_soon_data.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
            done: true,
        })
    }


    render() {
        let appNavigation = this.props.screenProps.appNavigation;

        if (!this.state.done) {
            return (
                <View style={styles.container}>
                    <Text>loading</Text>
                </View>
            )
        } else {
            return (

                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{flex: 1, fontSize: 20, color: 'black', margin: 10}}>
                            影院热映
                        </Text>
                        <Text style={{flex: 1, textAlign: 'right', fontSize: 15, color: 'green', margin: 10}}>
                            更多>
                        </Text>
                    </View>
                    <HorizontalListView subjects={this.state.in_theaters_subjects}
                                        appNavigation={appNavigation}
                                        type='in_theaters'/>

                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{flex: 1, fontSize: 20, color: 'black', margin: 10}}>
                            即将上映
                        </Text>
                        <Text style={{flex: 1, textAlign: 'right', fontSize: 15, color: 'green', margin: 10}}>
                            更多>
                        </Text>
                    </View>
                    <HorizontalListView
                        subjects={this.state.coming_soon_subjects}
                        appNavigation={appNavigation}
                        type='coming_soon'
                    />

                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{flex: 1, fontSize: 20, color: 'black', margin: 10}}>
                            精选榜单
                        </Text>
                    </View>
                    <HorizontalCardView subjects={this.state.selected_collections}/>
                </ScrollView>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        // borderWidth: screen.onePixel,
        // borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screenWidth * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }

});
