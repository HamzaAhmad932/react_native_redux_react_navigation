import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){

		return (
			<View style={styles.headerView}>
				<Text>{this.props.title}</Text>
			</View>
		)
	}

}
const styles = StyleSheet.create({
	headerView : {
		// flex : 1,
		backgroundColor : '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 25,
		height: 70,
		shadowColor : '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
});
export {Header};