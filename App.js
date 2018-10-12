/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import RouteConfig from './app/RouteConfig';
import StackNavigatorConfig from './app/StackNavigatorConfig';

//根路由
const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig);

export default class App extends Component {
    render(){
        return (
            <Navigator/>
        )
    }
}

