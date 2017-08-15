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


class HText extends Component {
    render() {

        let text = this.props.bage + ": ";

        this.props.items.map(function (item) {

            text = text + item.name + "/";

        })

        text = text.substr(0, text.length - 1);

        return (
            <View style={{marginBottom: 10}}>
                <Text numberOfLines={0}>{text}</Text>
            </View>
        )
    }
}


export default class UsBoxListView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;


        this.state = {
            subjects: subjects,
        }
    }


    _renderItem = ({item,index}) => (

        <View style={{backgroundColor: 'white'}}>

            {this.props.showIndex ? (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                    <View style={{width: 100, height: 0.3, backgroundColor: 'gray'}}/>
                    <Text style={{
                        marginLeft: 20, marginRight: 20, fontSize: 29, color: 'red', fontFamily: 'Serif',
                        fontStyle: 'italic'
                    }}>{parseInt(index) + 1}</Text>
                    <View style={{width: 100, height: 0.3, backgroundColor: 'gray'}}/>
                </View>) : (<View/>)}


            <TouchableNativeFeedback onPress={() => {
                this.props.navigation.navigate('MovieDetail', {
                    id: item.subject.id,
                });
            }}>


                <View style={{
                    backgroundColor: 'white',
                    margin: 20,
                    flexDirection: 'row',
                    borderRadius: 5,
                    borderWidth: 0.1
                }}>
                    <Image resizeMode={'stretch'} style={{width: 110, height: 150, margin: 10}}
                           source={{uri: item.subject.images.large}}/>

                    <View style={{marginLeft: 10, flex: 1}}>
                        <Text
                            numberOfLines={1}
                            style={{
                                marginTop: 10,
                                marginBottom: 10,
                                width: 120,
                                textAlign: 'left',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>{item.subject.title}
                        </Text>


                        <Text
                            style={{marginBottom: 10}}>{item.subject.rating.average == 0 ? "" : item.subject.rating.average}</Text>
                        <HText
                            bage='导演'
                            items={item.subject.directors}/>
                        <HText
                            bage='演员'
                            items={item.subject.casts}/>

                    </View>

                </View>
            </TouchableNativeFeedback>

            <Text style={{marginLeft: 20, fontSize: 15}}>
                票房{parseInt(item.box) / 1000}万美元
            </Text>

        </View>

    );

    _keyExtractor = (item) => item.rank;


    render() {

        return (
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
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