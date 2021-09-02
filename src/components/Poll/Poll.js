import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Avatar from '../UI/Avatar';
import PollForm from './PollForm';
import PollResult from './PollResult';
import './Poll.css';

function Poll({ author, question, answered, authedUser }) {
   return !authedUser ? (
      <Redirect to="/" />
   ) : (
      <div className="question poll">
         <div className="question-head">
            {!answered ? (
               <h3>{author.name} asks:</h3>
            ) : (
               <h3>Asked by {author.name}</h3>
            )}
         </div>
         <div className="question-body">
            <Avatar user={author} largeSize />
            {!answered ? (
               <PollForm question={question} />
            ) : (
               <PollResult question={question} currentUser={authedUser} />
            )}
         </div>
      </div>
   );
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
   const { questionID } = props.match.params;
   const { history } = props;
   const question = questions[questionID];

   if (!authedUser) {
      return {};
   }

   if (!question) {
      history.push('/404');
      return {};
   }

   const author = users[question.author];

   const currentUser = users[authedUser];
   const answered = Object.keys(currentUser.answers).find(
      (qID) => qID === questionID
   );

   return { question, author, answered, authedUser };
};

export default connect(mapStateToProps)(Poll);
