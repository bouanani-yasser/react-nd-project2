import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import questions from './questions';
import authedUser from './auth';

export default combineReducers({
   loadingBar: loadingBarReducer,
   authedUser,
   users,
   questions,
});
