import { GET_USERS } from '../actions/users';
import { NEW_USER_QUESTION } from '../actions/users';
import { NEW_USER_VOTE } from '../actions/users';

export default function users(state = {}, action) {
   switch (action.type) {
      case GET_USERS:
         return {
            ...state,
            ...action.users,
         };
      case NEW_USER_QUESTION:
         return {
            ...state,
            [action.authedUser]: {
               ...state[action.authedUser],
               questions: state[action.authedUser].questions.concat([
                  action.questionID,
               ]),
            },
         };
      case NEW_USER_VOTE:
         return {
            ...state,
            [action.authedUser]: {
               ...state[action.authedUser],
               answers: {
                  ...state[action.authedUser].answers,
                  [action.questionID]: action.answer,
               },
            },
         };
      default:
         return state;
   }
}
