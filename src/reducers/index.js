import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import quizReducer from './quiz';

export default reducer = combineReducers({
  nav: navigationReducer,
  quiz: quizReducer,
});