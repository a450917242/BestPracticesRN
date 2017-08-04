/**
 * Created by Rookie on 2017/7/27.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ToastAndroid,
} from 'react-native';


let type;

const title = "影视 图书 唱片 小组 舞台剧等";

export default class MainToolBar extends Component {


    constructor(props) {
        super(props);
        type = this.props.type;
    }

    _back = () => {
        this.props.navigation.goBack();
    };

    _goSearch = () => {
        this.props.navigation.navigate('Search', {
            type: type,
        })
    }

    render() {
        let onTab = this.props.onTab;
        let type = this.props.type;

        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#33BC61',
                height: 56,
                alignItems: 'center',
                borderWidth: 0.2,
            }}>


                <TouchableWithoutFeedback onPress={this._goSearch}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginLeft: 12,
                        marginRight: 12,
                        marginTop: 8,
                        marginBottom: 8,
                        backgroundColor: 'white',
                        borderRadius: 5
                    }}>
                        <Image style={{width: 20, height: 20, margin: 10}}
                               source={require('../images/ic_search_gray.png')}/>

                        <Text style={{color: 'gray', fontSize: 17}}>
                            {title}
                        </Text>

                        <Image style={{width: 20, height: 20, margin: 10}}
                               source={require('../images/ic_scan_gray.png')}/>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableOpacity onPress={() => {
                    ToastAndroid.showWithGravity("o(╯□╰)o", ToastAndroid.SHORT, ToastAndroid.CENTER);
                }}>
                    <Image style={{width: 30, height: 30, marginRight: 12, marginLeft: 12}}
                           source={require('../images/ic_chat_white.png')}/>
                </TouchableOpacity>


            </View>
        )
    }
}