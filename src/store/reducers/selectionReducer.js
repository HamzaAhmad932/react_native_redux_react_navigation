import * as ActionTypes from '../action-types';

const selectionReducer = (state = null, action)=>{
	switch(action.type){
		
		case ActionTypes.SELECT_TOPIC:
			return action.payload;
		default: 
		// returns the previous state when the reducer called last time
			return state;
	}
}

export default selectionReducer;