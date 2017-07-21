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


class SeparateComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'green', width: 10}}>

            </View>
        )
    }
}

export default class HorizontalListView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;

        this.state = {
            subjects: subjects,
        }
    }


    _renderItem = (item) => (

        <View style={{backgroundColor: 'white'}}>
            <View style={{
                backgroundColor: item.item.background_color,
                borderRadius: 8,
                alignItems: 'center',
                margin: 10,
                width: 200,
                height: 200
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        marginTop: 20,
                        width: 120,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>{item.item.name}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        marginTop: 5,
                        width: 120,
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'normal',
                        fontSize: 13,
                    }}>{item.item.description}
                </Text>


                <Image style={{width: 100, height: 100}}>
                    source={{uri: item.item.covers[0]}}
                </Image>

                {/*<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>*/}
                    {/*<Image style={{width: 50, height: 80}}>*/}
                        {/*source={{uri: item.item.covers[0]}}*/}
                    {/*</Image>*/}
                    {/*<Image style={{width: 50, height: 80}}>*/}
                        {/*source={{uri: item.item.covers[1]}}*/}
                    {/*</Image>*/}
                    {/*<Image style={{width: 50, height: 80}}>*/}
                        {/*source={{uri: item.item.covers[2]}}*/}
                    {/*</Image>*/}
                {/*</View>*/}

            </View>
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
                    ItemSeparatorComponent={SeparateComponent}
                >

                </FlatList>
            </View>

        )
    }
}