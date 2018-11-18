import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import LoginForm from '../../containers/LoginForm';

const RouterComponent = createStackNavigator({
	  Home: { screen: LoginForm }
});

export default RouterComponent;