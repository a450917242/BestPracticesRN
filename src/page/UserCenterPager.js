/**
 * Created by Rookie on 2017/8/22.
 */
import React, {Component} from 'react';

import {
    View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, ToastAndroid,

} from 'react-native';

import PopupDialog, {DialogButton, DialogTitle, SlideAnimation} from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-crop-picker';

let windowWidth = Dimensions.get('window').width;

export default class UserCenterPager extends Component {


    constructor(props) {
        super(props);


        this.state = {
            backgroundPhotoUri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=264358067,1297679371&fm=26&gp=0.jpg',
        };
    }

    onPhotoResult = (data) => {
        this.setState({
            backgroundPhotoUri: data.path,
        });
    };


    _openCamera = () => {
        this.popupDialog.dismiss();
        this.props.navigation.navigate('Camera', {getPhotos: this.onPhotoResult});
    };

    _openCameraRoll = () => {
        this.popupDialog.dismiss();


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(this.onPhotoResult);
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <Image style={(styles.userInfobg)} source={{uri: this.state.backgroundPhotoUri}}>
                        <TouchableOpacity onPress={() => {
                            this.popupDialog.show();
                        }}>
                            <Image style={styles.avatar}
                                   source={{uri: 'http://pic.jia360.com/ueditor/jsp/upload/201609/27/17601474946123480.png'}}/>
                        </TouchableOpacity>
                    </Image>


                </ScrollView>


                <PopupDialog
                    width={windowWidth * 0.8}
                    height={200}
                    dialogTitle={<DialogTitle title="Please Select "/>}
                    actions={[<DialogButton
                        text="Cancel" align="center" onPress={() => {
                        this.popupDialog.dismiss()
                    }} key="button-1"/>]}
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                    }}
                    dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
                >
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this._openCamera}>
                            <Text style={{fontSize: 20, color: 'black', margin: 10}}>Camera</Text>
                        </TouchableOpacity>
                        <View style={{backgroundColor: 'black', height: 0.5, width: windowWidth * 0.8}}/>
                        <TouchableOpacity onPress={this._openCameraRoll}>
                            <Text style={{fontSize: 20, color: 'black', margin: 10}}>CameraRoll</Text>
                        </TouchableOpacity>


                    </View>

                </PopupDialog>
            </View>
        )
    }
}

const
    styles = StyleSheet.create({
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