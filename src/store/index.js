
import {createStore, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/index';
import { 
         reduxifyNavigator, 
         createReactNavigationReduxMiddleware, 
         createNavigationReducer
	} from 'react-navigation-redux-helpers';
import AppNavigator from '../routes/index';

     const middleware = createReactNavigationReduxMiddleware(
       "root",
       state => state.nav,
     );
     const AppRedux = reduxifyNavigator(AppNavigator, "root");
     const mapStateToProps = (state) => ({
       state: state.nav,
     });
export const AppWithNavigationState = connect(mapStateToProps)(AppRedux);

export const store = createStore(RootReducer, {}, applyMiddleware(middleware, ReduxThunk));





// createStore(reducers, {default state or initial state to pass}, applyMiddleware());