import { SET_AUTHED_USER } from '../actions/auth';
import { LOGOUT_USER } from '../actions/auth';

export default function authedUser(state = null, action) {
   switch (action.type) {
      case SET_AUTHED_USER:
         return action.id;
      case LOGOUT_USER:
         return null;
      default:
         return state;
   }
}
