export const GET_USERS = 'GET_USERS';
export const NEW_USER_QUESTION = 'NEW_USER_QUESTION';
export const NEW_USER_VOTE = 'NEW_USER_VOTE';

export function getUsers(users) {
   return {
      type: GET_USERS,
      users,
   };
}

export function newUserQuestion(authedUser, questionID) {
   return {
      type: NEW_USER_QUESTION,
      authedUser,
      questionID,
   };
}

export function newUserVote(authedUser, questionID, answer) {
   return {
      type: NEW_USER_VOTE,
      authedUser,
      questionID,
      answer,
   };
}
