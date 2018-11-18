import React from 'react';
import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import Summary from './Summary';
import Question from './Question';

export const AppNavigator = createStackNavigator({
  dashboard: { screen: Dashboard },
  quiz: { screen: Question },
  summary: { screen: Summary }
}, {
  initialRouteName: 'dashboard',
  headerMode: 'screen'
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware("root", state => state.nav)
const addListener = createReduxBoundAddListener("root")

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener, })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);