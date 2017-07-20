/**
 * Created by Rookie on 2017/7/20.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

export default class HorizontalListView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;

        this.state = {
            subjects: subjects,
        }
    }


    _renderItem = (item) => (
        <View style={{backgroundColor: 'white',  alignItems: 'center'}}>
            <Image style={{width: 100, height: 120}} source={{uri: item.item.images.large}}/>
            <Text
                style={{textAlign: 'center', textColor: 'black', fontSize: 15, marginTop: 10}}>{item.item.title}</Text>
        </View>
    )

    _keyExtractor = (item) => item.id;


    render() {
        return (
            <View>
                <FlatList
                    horizontal={true}
                    keyExtractor={this._keyExtractor}
                    data={this.state.subjects}
                    renderItem={this._renderItem}
                >

                </FlatList>
            </View>

        )
    }
}