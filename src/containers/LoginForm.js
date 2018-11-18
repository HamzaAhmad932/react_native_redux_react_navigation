import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardSection, InputField, Button, Spinner} from '../components/index';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../store/actions/index';

class LoginForm extends Component{
	constructor(props){
		super(props);

		this.onEmailChanged = this.onEmailChanged.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmitButton = this.onSubmitButton.bind(this);
		this.renderErrorMessage = this.renderErrorMessage.bind(this);
		this.renderButton = this.renderButton.bind(this);
	}
	
	onSubmitButton(){
		const {email, password} = this.props;
		this.props.loginUser({email, password});
		// if(this.props.auth){
		// 	this.props.navigation.navigate('ItemDetail');
		// }
	}
	onEmailChanged(text){
			this.props.emailChanged(text);
	};
	onPasswordChange(text){
		this.props.passwordChanged(text);
	};
	renderErrorMessage(){
		if(this.props.error){
			return (
				<View>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	};
	renderButton(){
		if(this.props.loading){
			return <Spinner size="large"/>
		}else{
			return (
				<Button onPress={this.onSubmitButton}>
					Login
				</Button>
				);
		}
	}
	render(){
		const {formContainer} = styles;
		return(
				<Card>
					<CardSection>
						<InputField 
							onChangeText={this.onEmailChanged}
							label="Email" 
							placeholder="Enter Email"
							value={this.props.email}
						/>
					</CardSection>
					<CardSection>
						<InputField 
							onChangeText={this.onPasswordChange}
							label="Password" 
							placeholder="Enter Password" 
							secureTextEntry={true}
							value= {this.props.password}
						/>
					</CardSection>
					{this.renderErrorMessage()}
					<CardSection>
						{this.renderButton()}
					</CardSection>
				</Card>
			);
	}
}
const styles = StyleSheet.create({
		formContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red',
		},
});
const mapStateToProps = (state)=>{
	console.log(state);
	return {
		email : state.auth.email,
		password : state.auth.password,
		error : state.auth.error,
		loading: state.auth.loading,
		auth : state.auth.auth
	}
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);