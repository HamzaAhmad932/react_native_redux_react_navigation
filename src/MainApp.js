import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { store, AppWithNavigationState } from './store/index';

class MainApp extends Component{
	componentDidMount(){
	
	}
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
export default MainApp;