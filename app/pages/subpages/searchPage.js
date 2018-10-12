import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    RefreshControl
} from 'react-native';


// let date = new Date();
// let month = date.getMonth() + 1;
// let day = date.getDate();

export default class searchPage extends Component {
    // state;      ES6中可以把constructor中的实例属性列出来，当然也可以直接定义在外面
    // state = {};   直接定义在外面，但是必须用 等式（=） 的形式。
    constructor(props){
        // const {state} = ;   //ES6新语法，解构赋值+++++++++++++++++++++++++++
        super(props);
        this.state = {
            data:[],
            refreshing: false,
            url: 'http://api.juheapi.com/japi/toh?key=bffe945f9db56d025f030ca2a9672557&v=1.0&month='+this.props.navigation.state.params.month+'&day='+ this.props.navigation.state.params.day,
        }

    }

    _renderItem({item}) {
        let success = {uri:item.pic};
        const failure = require('../../../images/false.png');
        return(
            <View style={styles.item}>
                <Image source={item.pic ? success : failure} style={styles.pics}/>
                <View style={styles.description}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>公历：{item.year}年{item.month}月{item.day}日</Text>
                    <Text style={styles.lunar}>农历：{item.lunar}</Text>
                    <Text style={styles.des} >{item.des}</Text>
                </View>
            </View>
        )

    }
    _onRefresh() {
        this.setState({refreshing: true});
        this.getNews();
        this.setState({refreshing: false})
    }
    getNews(url){
        fetch(url)
            .then( (response) => response.json() )
            .then( (json) => {
                this.setState({
                    data: json.result
                })
            })
            .catch( (err) => {
                if (err) throw err;
            })
    }
    componentDidMount(){
        this.getNews(this.state.url);    //RN 中不存在跨域问题
    }

    render() {

        // let month = this.props.navigation.state.params.month;
        // let day = this.props.navigation.state.params.day;
        // alert( month+day );
        // let url = 'http://api.juheapi.com/japi/toh?key=bffe945f9db56d025f030ca2a9672557&v=1.0&month='+month+'&day='+ day;
        return (
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        enabled={true}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                style={{flex:1}}
                data={this.state.data}
                renderItem={this._renderItem}
                key
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21
    },
    pics: {
        marginRight: 10,
        width: 100,
        height: 100
    },
    item: {
        backgroundColor: '#f8f8f8',
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row'
    },
    description: {
        flex: 1,          //实现文字的自动换行
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent:'space-evenly'
    },
    dex: {
        lineHeight: 25,
    },
    title: {
        lineHeight: 30,
        fontWeight: '700',         //这字体粗细设置700居然要加引号，妈的！！！
        color: '#345266'
    },
    date: {
        fontStyle: 'italic',

    },
    lunar: {
        fontStyle: 'italic',
    }
});
