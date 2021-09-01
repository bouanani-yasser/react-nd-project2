import React from 'react';
import { connect } from 'react-redux';

import Avatar from '../UI/Avatar';
import './Poll.css';
import PollForm from './PollForm';
import PollResult from './PollResult';

function Poll({ author, question, answered, authedUser }) {
   return (
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
   const { authorID, questionID } = props.match.params;
   const question = questions[questionID];
   const author = users[authorID];

   const currentUser = users[authedUser];
   const answered = Object.keys(currentUser.answers).find(
      (qID) => qID === questionID
   );

   return { question, author, answered, authedUser };
};

export default connect(mapStateToProps)(Poll);
