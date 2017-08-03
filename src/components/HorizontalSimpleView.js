/**
 * Created by Rookie on 2017/7/20.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
    ToastAndroid,
    TouchableNativeFeedback,
} from 'react-native';


class SeparateComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'green', width: 10}}>

            </View>
        )
    }
}


export default class HorizontalSimpleView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;


        this.state = {
            subjects: subjects,
        }
    }


    _renderItem = (item) => (
        <View style={{backgroundColor: 'white'}}>

            <TouchableNativeFeedback onPress={() => {
                this.props.navigation.navigate('MovieCelebrity', {
                    id: item.item.id,
                    name: item.item.name,
                });
            }}>
                <View style={{backgroundColor: 'white', alignItems: 'center', margin: 10}}>
                    <Image resizeMode={'stretch'} style={{width: 120, height: 180}}
                           source={{uri: item.item.avatars.large}}/>
                    <Text
                        numberOfLines={1}
                        style={{
                            width: 120,
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'normal',
                            fontSize: 15,
                            marginTop: 2
                        }}>{item.item.name}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    )

    _keyExtractor = (item,index) => index;


    render() {


        return (
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={this._keyExtractor}
                    data={this.state.subjects}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={SeparateComponent}
                >

                </FlatList>
            </View>

        )
    }
}