import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = ({onChangeText, value, label, placeholder, secureTextEntry})=>{
	return(
		<View style={styles.inputFieldContainer}>
			<Text style={styles.inputLabelStyle}>{label}</Text>
			<TextInput
				autoCorrect={false}
				placeholder={placeholder}
				style={styles.inputStyle}
				onChangeText={onChangeText}
				value={value}
				underlineColorAndroid='transparent'
				secureTextEntry={secureTextEntry}
			/>
		</View>
		);
}
const styles = StyleSheet.create({
	inputFieldContainer:{
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputLabelStyle:{
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
	},
	inputStyle: {
		height: 20,
		width: 100,
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize:18,
		lineHeight: 23,
		flex: 2,
	}
});

export {InputField};