import React from 'react';
import LoginForm from '../containers/LoginForm';
import Logout from '../containers/Logout';
import {createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Feed: { 
    screen: LoginForm,
    navigationOptions: {
        title: 'Login'
      }
     },
  ItemDetail: { 
    screen: Logout,
    navigationOptions: {
        title: 'Home'
      }
     },
},{
  initialRouteName: 'Feed',
});

export default AppNavigator;