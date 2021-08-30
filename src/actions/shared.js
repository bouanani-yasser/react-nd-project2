import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../util/api';
import { getUsers } from './users';
import { getQuestions } from './questions';

export const initiateData = () => (dispatch) => {
   dispatch(showLoading());
   return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
   });
};
