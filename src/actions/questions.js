import { saveQuestion, saveQuestionAnswer } from '../util/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { newUserQuestion } from './users';
import { newUserVote } from './users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const NEW_QUESTION = 'NEW_QUESTION';
export const NEW_VOTE = 'NEW_VOTE';

export function getQuestions(questions) {
   return {
      type: GET_QUESTIONS,
      questions,
   };
}

export function newQuestion(question) {
   return {
      type: NEW_QUESTION,
      question,
   };
}

export function newVote(authedUser, qid, answer) {
   return {
      type: NEW_VOTE,
      qid,
      authedUser,
      answer,
   };
}

export function handleNewQuestion(optionOneText, optionTwoText, history) {
   return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());

      return saveQuestion({
         optionOneText,
         optionTwoText,
         author: authedUser,
      })
         .then((question) => {
            dispatch(newQuestion(question));
            dispatch(newUserQuestion(authedUser, question.id));
         })
         .then(() => dispatch(hideLoading()))
         .then(() => history.push('/'));
   };
}

export function handleNewVote(qid, answer) {
   return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());

      return saveQuestionAnswer({
         authedUser,
         qid,
         answer,
      })
         .then(() => {
            dispatch(newVote(authedUser, qid, answer));
            dispatch(newUserVote(authedUser, qid, answer));
         })
         .then(() => dispatch(hideLoading()));
   };
}
