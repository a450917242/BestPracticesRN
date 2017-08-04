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
    RefreshControl,
} from 'react-native';

import Api from '../util/Api';

const screenWidth = Dimensions.get('window').width;

import HorizontalListView from '../components/HorizontalListView';
import HorizontalCardView from '../components/HorizontalCardView';
import ToolBar from '../components/ToolBar';
import MoreView from "../components/MoreView";
import MainToolBar from "../components/MainToolBar";


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
            isRefreshing: false,
        };

    }


    componentDidMount() {

        // Api.Get(this.state.url_in_theaters, null, this._success, this._error);
        // Api.Get(this.state.url_coming_soon, null, this.coming_soon_success, this._error);

        this._error();

    }


    in_theaters_success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        ToastAndroid.show("success==" + resData.subjects.length, ToastAndroid.SHORT);

        this.setState({
            in_theaters_subjects: resData.subjects,
            done: true,
        });


    };

    coming_soon_success = (resData) => {
        console.log('成功');
        console.log(resData.count);

        ToastAndroid.show("success-1==" + resData.subjects.length, ToastAndroid.SHORT);
        this.setState({
            coming_soon_subjects: resData.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
        })
    };


    _error = (resData) => {

        console.log('失败');
        console.log(resData);

        ToastAndroid.show("请求数据失败-1", ToastAndroid.SHORT);


        this.setState({
            in_theaters_subjects: in_threaters_data.subjects,
            coming_soon_subjects: coming_soon_data.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
            done: true,
            isRefreshing: false,
        })
    }


    render() {


        let appNavigation = this.props.screenProps.appNavigation;


        _onRefresh = () => {

            this.setState({isRefreshing: true});

            // Api.Get(this.state.url_in_theaters, null, this._success, this._error);
            // Api.Get(this.state.url_coming_soon, null, this.coming_soon_success, this._error);

            this._error();
        };


        if (!this.state.done) {
            return (
                <View style={styles.container}>
                    <Text>loading</Text>
                </View>
            )
        } else {
            return (


                <View style={{flex: 1}}>


                    <MainToolBar
                        onTab={true}
                        title="Movie"
                        type="Movie"
                        navigation={appNavigation}
                    />

                    <ScrollView
                        style={{flex: 1}}
                        showsVerticalScrollIndicator={false}

                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._onRefresh}
                                tintColor="#ff0000"
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffffff"
                            />
                        }
                    >
                        <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{flex: 1, fontSize: 20, color: 'black', margin: 10}}>
                                影院热映
                            </Text>
                            <MoreView type="Now" appNavigation={appNavigation}/>
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
                            <MoreView type="Future" appNavigation={appNavigation}/>
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
                        <HorizontalCardView subjects={this.state.selected_collections } appNavigation={appNavigation}/>
                    </ScrollView>
                </View>
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
