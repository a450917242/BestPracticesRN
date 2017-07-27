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


class BottomTextComponent extends Component {


    render() {



        if (this.props.show) {
            return (
                <View>
                    <Text
                        numberOfLines={1}
                        style={{
                            width: 120,
                            textAlign: 'left',
                            color: 'black',
                            fontWeight: 'normal',
                            fontSize: 15,
                            marginTop: 2
                        }}>{  this.props.item.item.rating.average == 0 ? '暂无评分' : this.props.item.item.rating.average }</Text>
                </View>
            );
        } else {
            return (
                <View style={{flexDirection: 'row', width: 120}}>

                    {this.props.item.item.genres.map(function (gener) {
                        return <Text key={gener}>{gener} </Text>
                    })}


                </View>
            )
        }


    }
}


export default class HorizontalListView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;
        const type = this.props.type;


        this.state = {
            subjects: subjects,
            show: type == 'in_theaters',
        }
    }


    _renderItem = (item) => (
        <View style={{backgroundColor: 'white'}}>

            <TouchableNativeFeedback onPress={() => {
                this.props.appNavigation.navigate('MovieDetail', {
                    id: item.item.id,
                });
            }}>
                <View style={{backgroundColor: 'white', alignItems: 'center', margin: 10}}>
                    <Image resizeMode={'stretch'} style={{width: 120, height: 180}}
                           source={{uri: item.item.images.large}}/>
                    <Text
                        numberOfLines={1}
                        style={{
                            width: 120,
                            textAlign: 'left',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginTop: 2
                        }}>{item.item.title}
                    </Text>
                    <BottomTextComponent
                        show={this.state.show}
                        item={item}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>

    );

    _keyExtractor = (item) => item.id;


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