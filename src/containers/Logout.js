import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

class Logout extends Component{

	constructor(props){
		super(props);
	}
	render(){
		return(
			<View>
				<Button
					title="Go Back"
					onPress={()=>{this.props.navigation.goBack()}}
				/>
			</View>
			);
	}
}

export default Logout;