import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Alert} from 'react-native';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            month:'',
            day:'',
            text: '',
        }
    }
	render() {
		return (
			<View style={styles.container}>
                <View style={styles.find}>
                    <TextInput
                        underlineColorAndroid= {'transparent'}
                        maxLength= {2}
                        keyboardType={'numeric'}
                        // keyboardAppearance={'light'}   //设置键盘颜色，但是不起作用
                        // contextMenuHidden={true}
                        // clearTextOnFocus={true}        //不起作用
                        // defaultValue={'1'}             //默认值
                        inlineImageLeft= 'calendar_left'
                        style= {{height: 40,width: 40, borderColor: 'gray', borderWidth: 1,padding: 0,textAlign: 'center'}}
                        onChangeText= {(text) => this.setState({month: text})}
                        // value={this.state.text}
                    />
                    <Text style={{height: 40,width: 40,textAlign: 'center',lineHeight: 40}}>月</Text>
                    <TextInput
                        underlineColorAndroid= {'transparent'}
                        maxLength={2}
                        keyboardType={'numeric'}
                        // clearTextOnFocus={true}          //不起作用
                        // defaultValue={'1'}               //默认值
                        style={{height: 40,width: 40, borderColor: 'gray', borderWidth: 1,padding: 0,textAlign: 'center'}}
                        onChangeText={(text) => this.setState({day: text})}

                        // value={this.state.text}
                    />
                    <Text style={{height: 40,width: 40,textAlign: 'center',lineHeight: 40}}>日</Text>
                </View>
                <Button
                    onPress={ () => {
                        // alert('你点击了查询')
                        // Alert.alert('你点击了查询')     //可以用ALert组件的.alert方法，也可以直接调用alert方法
                        this.props.navigation.navigate('searchPage',{month:this.state.month,day:this.state.day})
                    }}
                    title= '查询'
                    style={styles.search}
                />
			</View>
		)
	};
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f8f8f8',
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	},
	tabBarIcon: {
		width:21,
		height:21,
	},
	find: {
	    flexDirection: 'row',
        justifyContent: 'center'
    },
    search: {
	    width: 50,
        marginTop: 30
    }
})