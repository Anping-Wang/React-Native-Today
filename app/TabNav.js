import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';    //TabNavigator组件已经弃用，改用createBottomTabNavigator

import HomePage from './pages/HomePage';
import Search from './pages/Search';
import MyPage from './pages/MyPage';

const HomePic_on = require('../images/tabbar/home_on.png');
const HomePic = require('../images/tabbar/home.png');
const SearchPic_on = require('../images/tabbar/search_on.png');
const SearchPic = require('../images/tabbar/search.png');
const MePic_on = require('../images/tabbar/me_on.png');
const MePic = require('../images/tabbar/me.png');

export default TavNav = createBottomTabNavigator(
	{
		Home: {
			screen: HomePage,
            navigationOptions: ( {navigation, screenProps} ) => ({

                // header: null,         //这里设置不起作用
                // headerTitle: '首页',
                tabBarLabel: '首页',
                tabBarIcon: ({focused}) => {
                    return (
                        <Image style={styles.tabBarIcon} source={focused ? HomePic_on : HomePic}/>
                    );
                },
            })
        },
		Search: {
		    screen: Search,
            navigationOptions: {
                tabBarLabel: '查询',
                tabBarIcon: ({focused}) => {
                    return (
                        <Image style={styles.tabBarIcon} source={focused ? SearchPic_on : SearchPic}/>
                    );
                }
            }
        },
		Me: {
		    screen: MyPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused}) => {
                    return (
                        <Image style={styles.tabBarIcon} source={focused ? MePic_on : MePic}/>
                    );
                }
            }
        }
	},
	{
	    navigationOptions: {
	        // header: null,          //这里设置不起作用？？
        },
		//第一次加载时初始选项卡的路由
		initialRouteName:'Home',
		tabBarOptions: {
			//当前选中的tabbar的文本和图标颜色
			activeTintColor: '#f00',
			//当前未选中的tabbar的文本和图标颜色
			inactiveTintColor: '#000',
			//是否显示tabbar的图标，默认为false
			showIcon: true,
			//是否显示tabbar的文本，默认为true
			showLabel: true,
			//是否将文本转为大写，默认为true
			upperCaseLabel: false,
			//按压时的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.2,
            //tabbar 样式
            style: {
            	backgroundColor: '#fff',
            	paddingBottom: 1,
            	borderTopWidth: 0.2,
            	paddingTop: 1,
            	borderTopColor: '#ccc'
            },
            //tabbar 文本样式
            labelStyle: {
            	fontSize:11,
            	margin:2
            },
            //tabbar 页指示符的样式（tab页下面的一条线）
            indicatorStyle: {height: 0},
		},
		//tabbar 在页面中的位置 ：top , bottom
		tabBarPosition: 'bottom',
		//是否允许滑动切换tab
		scrollEnabled: true,
		//是否允许切换tab页时使用动画
		animationEnabled: false,
		//是否懒加载
		lazy: true,
		//返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width:21,
        height:21,
    }
});