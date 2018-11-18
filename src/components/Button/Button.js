import React, {Component} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({onPress, children})=>{
	return(
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.buttonTextStyle}>{children}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	buttonStyle:{
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderColor: '#007aff',
		borderWidth: 2,
		borderRadius: 5,
		padding: 10,
		marginLeft: 5,
		marginRight: 5,
		alignItems: 'center'
	},
	buttonTextStyle: {
		fontSize: 18,
		color: '#007aff',
		alignSelf: 'center',
	}

});
export {Button};