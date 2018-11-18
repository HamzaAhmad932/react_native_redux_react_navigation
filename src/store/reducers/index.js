import {combineReducers} from 'redux';
import defaultReducer from './defaultReducer';
import selectionReducer from './selectionReducer';
import AuthReducer from './AuthReducer';
import AppNavigator from '../../routes/index';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(AppNavigator);

const RootReducer = combineReducers({
	defaultReducer,
	nav : navReducer,
	auth: AuthReducer
});
// console.log(defaultReducer);

export default RootReducer;