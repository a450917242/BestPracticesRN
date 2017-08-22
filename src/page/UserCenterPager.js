/**
 * Created by Rookie on 2017/8/22.
 */
import React, {Component} from 'react';

import {
    View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, ToastAndroid,

} from 'react-native';

let windowWidth = Dimensions.get('window').width;

export default class UserCenterPager extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <Image style={(styles.userInfobg)} source={require('../images/live_player_bg.jpg')}>
                        <TouchableOpacity onPress={}>
                            <Image style={styles.avatar}
                                   source={{uri: 'http://pic.jia360.com/ueditor/jsp/upload/201609/27/17601474946123480.png'}}/>
                        </TouchableOpacity>
                    </Image>


                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfobg: {
        height: 250,
        alignItems: 'center',
        width: windowWidth,
        justifyContent: 'center'
    },
    avatar: {
        margin: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white'
    }
});