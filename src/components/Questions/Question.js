import React from 'react';
import Avatar from '../UI/Avatar';

function Question({ question, user }) {
   return (
      <div className="question">
         <div className="question-head">
            <h2>{user.name} asks:</h2>
         </div>
         <div className="question-body">
            <Avatar user={user} />
            <div className="question-ctn">
               <h3>Would you rather</h3>
               <p>
                  {question.optionOne.text} <b>or</b> ...
               </p>
               <button className="btn btn-outline-success">View poll</button>
            </div>
         </div>
      </div>
   );
}

export default Question;
