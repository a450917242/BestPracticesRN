/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import Api from '../util/Api';

import InTheaters from '../components/HorizontalListView';


export default class MoviePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.douban.com/v2/movie/in_theaters',
            subjects: [{
                "rating": {"max": 10, "average": 7.7, "stars": "40", "min": 0},
                "genres": ["\u52a8\u4f5c", "\u6b66\u4fa0", "\u53e4\u88c5"],
                "title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1077991\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/img\/celebrity\/small\/1453574419.48.jpg",
                        "large": "https://img1.doubanio.com\/img\/celebrity\/large\/1453574419.48.jpg",
                        "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/1453574419.48.jpg"
                    },
                    "name": "\u5f20\u9707",
                    "id": "1077991"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1052359\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/37843.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/37843.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/37843.jpg"
                    },
                    "name": "\u6768\u5e42",
                    "id": "1052359"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274761\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/25943.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/25943.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/25943.jpg"
                    },
                    "name": "\u5f20\u8bd1",
                    "id": "1274761"
                }],
                "collect_count": 19829,
                "original_title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1321200\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/59201.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/59201.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/59201.jpg"
                    },
                    "name": "\u8def\u9633",
                    "id": "1321200"
                }],
                "year": "2017",
                "images": {
                    "small": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2492665487.webp",
                    "large": "https://img1.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2492665487.webp",
                    "medium": "https://img1.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2492665487.webp"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26270502\/",
                "id": "26270502"
            }, {
                "rating": {"max": 10, "average": 7.7, "stars": "40", "min": 0},
                "genres": ["\u52a8\u4f5c", "\u6b66\u4fa0", "\u53e4\u88c5"],
                "title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                "casts": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1077991\/",
                    "avatars": {
                        "small": "https://img1.doubanio.com\/img\/celebrity\/small\/1453574419.48.jpg",
                        "large": "https://img1.doubanio.com\/img\/celebrity\/large\/1453574419.48.jpg",
                        "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/1453574419.48.jpg"
                    },
                    "name": "\u5f20\u9707",
                    "id": "1077991"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1052359\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/37843.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/37843.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/37843.jpg"
                    },
                    "name": "\u6768\u5e42",
                    "id": "1052359"
                }, {
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1274761\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/25943.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/25943.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/25943.jpg"
                    },
                    "name": "\u5f20\u8bd1",
                    "id": "1274762"
                }],
                "collect_count": 19829,
                "original_title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                "subtype": "movie",
                "directors": [{
                    "alt": "https:\/\/movie.douban.com\/celebrity\/1321200\/",
                    "avatars": {
                        "small": "https://img3.doubanio.com\/img\/celebrity\/small\/59201.jpg",
                        "large": "https://img3.doubanio.com\/img\/celebrity\/large\/59201.jpg",
                        "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/59201.jpg"
                    },
                    "name": "\u8def\u9633",
                    "id": "1321200"
                }],
                "year": "2017",
                "images": {
                    "small": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2492665487.webp",
                    "large": "https://img1.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2492665487.webp",
                    "medium": "https://img1.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2492665487.webp"
                },
                "alt": "https:\/\/movie.douban.com\/subject\/26270502\/",
                "id": "26270508"
            },
                {
                    "rating": {"max": 10, "average": 7.7, "stars": "40", "min": 0},
                    "genres": ["\u52a8\u4f5c", "\u6b66\u4fa0", "\u53e4\u88c5"],
                    "title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                    "casts": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1077991\/",
                        "avatars": {
                            "small": "https://img1.doubanio.com\/img\/celebrity\/small\/1453574419.48.jpg",
                            "large": "https://img1.doubanio.com\/img\/celebrity\/large\/1453574419.48.jpg",
                            "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/1453574419.48.jpg"
                        },
                        "name": "\u5f20\u9707",
                        "id": "1077991"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1052359\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/img\/celebrity\/small\/37843.jpg",
                            "large": "https://img3.doubanio.com\/img\/celebrity\/large\/37843.jpg",
                            "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/37843.jpg"
                        },
                        "name": "\u6768\u5e42",
                        "id": "1052359"
                    }, {
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1274761\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/img\/celebrity\/small\/25943.jpg",
                            "large": "https://img3.doubanio.com\/img\/celebrity\/large\/25943.jpg",
                            "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/25943.jpg"
                        },
                        "name": "\u5f20\u8bd1",
                        "id": "1274761"
                    }],
                    "collect_count": 19829,
                    "original_title": "\u7ee3\u6625\u5200II\uff1a\u4fee\u7f57\u6218\u573a",
                    "subtype": "movie",
                    "directors": [{
                        "alt": "https:\/\/movie.douban.com\/celebrity\/1321200\/",
                        "avatars": {
                            "small": "https://img3.doubanio.com\/img\/celebrity\/small\/59201.jpg",
                            "large": "https://img3.doubanio.com\/img\/celebrity\/large\/59201.jpg",
                            "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/59201.jpg"
                        },
                        "name": "\u8def\u9633",
                        "id": "1321200"
                    }],
                    "year": "2017",
                    "images": {
                        "small": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2492665487.webp",
                        "large": "https://img1.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2492665487.webp",
                        "medium": "https://img1.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2492665487.webp"
                    },
                    "alt": "https:\/\/movie.douban.com\/subject\/26270502\/",
                    "id": "26270505"
                }],
            done: true,
        };

    }


    componentDidMount() {
        // Api.Get(this.state.url, null, this._success, this._error)
    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);
        this.setState({
            subjects: resData.subjects,
            done: true,
        })
    }


    _error = (resData) => {
        console.error('失败');
        console.error(resData);
    }


    render() {

        if (!this.state.done) {
            return (
                <View style={styles.container}>
                    <Text>loading</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <InTheaters subjects={this.state.subjects}/>
                </View>


            )
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});