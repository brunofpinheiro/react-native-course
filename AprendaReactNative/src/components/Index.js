import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Home from './Home';

const MainNav = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
    },
  }),
);

export default MainNav;
