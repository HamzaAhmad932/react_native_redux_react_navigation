import * as ActionTypes from '../action-types';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
// import NavigationService from '../../../NavigationService';
import axios from 'axios';

export function emailChanged(text){
    return {
        type: ActionTypes.EMAIL_CHANGED,
        payload : text
    }
}

export function passwordChanged(text){
	return {
		type : ActionTypes.PASSWORD_CHANGED,
		payload : text
	}
}

export function loginUser({email, password}){
	// redux thunk allows us to call an action after an asyncroneous request complete
	// and give us an option to call the action when all the request delay done
	// by default an action returns a type property and a payload but by redux thunk allows us
	// an action to return a function and that function then call an action
	return (dispatch)=>{
			dispatch({type: ActionTypes.LOGIN_USER}); //this is used for loading spinner
		// firebase.auth().signInWithEmailAndPassword(email, password)
		// .then((user)=>{ loginUserSuccess(dispatch, user) })
		// .catch(()=>{
		// 	firebase.auth().createUserWithEmailAndPassword(email, password)
		// 	.then((user)=>{ loginUserSuccess(dispatch, user) })
		// 	.catch(()=>{ loginFail(dispatch) });
		// });
		axios({
			url : 'http://api.cricfl.com/api/v1/login',
			method : 'POST',
			headers : {
				'Content-Type': 'application/json'
			},
			data : {email, password}
		})
		.then((resp)=>{
			if(resp.data.token != null){
				loginUserSuccess(dispatch, resp.data.user);
			}
		})
		.catch((err)=>{
			loginFail(dispatch);
		});
	};
};

////////////////////////////////////////////////////////////////////////////
// Helper Functions
////////////////////////
const loginUserSuccess = (dispatch, user)=>{
	dispatch({ 
		type: ActionTypes.LOGIN_USER_SUCCESSFULLY, 
		payload: user
	});
	dispatch(NavigationActions.navigate({routeName: 'ItemDetail'}));
};
const loginFail = (dispatch)=>{
	dispatch({type: ActionTypes.LOGIN_USER_FAIL});
	
};