import * as ActionTypes from '../action-types/index';


const INITIAL_STATE = { 
		email: '',
		password : '',
		user : null,
		error: '',
		loading: false,
		auth : false
	 };

export default (state = INITIAL_STATE, action)=>{

	console.log(action);
	// ...spread operator maps the old state and update the new one as well
	// if a specific property of state object is updated than this return will only updated part instead of a new one
	switch(action.type){
		case ActionTypes.EMAIL_CHANGED:
			return {...state, email : action.payload};
		case ActionTypes.PASSWORD_CHANGED:
			return {...state, password : action.payload};
		case ActionTypes.LOGIN_USER:
			return {...state, loading: true, error: ''};
		case ActionTypes.LOGIN_USER_SUCCESSFULLY:
			return {...state, ...INITIAL_STATE ,user: action.payload, auth : true};
		case ActionTypes.LOGIN_USER_FAIL:
			return {...state, error: 'Authentication Failed !', password: '', loading: false};
		default:
			return state;
	}
};