import React from 'react';

import './PollResult.css';

function PollResult({ question, currentUser }) {
   const votes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

   const opt1Votes = question.optionOne.votes.length;
   const opt1P = ((opt1Votes / votes) * 100).toFixed(0);

   const opt2Votes = question.optionTwo.votes.length;
   const opt2P = ((opt2Votes / votes) * 100).toFixed(0);

   let currentUserVote = null;

   question.optionOne.votes.includes(currentUser)
      ? (currentUserVote = 1)
      : (currentUserVote = 2);

   return (
      <div className="question-ctn result">
         <h2>Results:</h2>
         <div className="option">
            {currentUserVote === 1 && (
               <div className="your-vote">Your Vote</div>
            )}
            <h6>Would you rather {question.optionOne.text}?</h6>
            <div className="progress" style={{ height: '35px' }}>
               <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: opt1P + '%' }}
                  aria-valuenow={opt1P}
                  aria-valuemin="0"
                  aria-valuemax="100"
               >
                  <b>{opt1P + '%'}</b>
               </div>
            </div>
            <h5>
               {opt1Votes}
               <span> out of </span>
               {votes}
               <span> votes </span>
            </h5>
         </div>
         <div className="option">
            {currentUserVote === 2 && (
               <div className="your-vote">Your Vote</div>
            )}
            <h6>Would you rather {question.optionTwo.text}?</h6>
            <div className="progress" style={{ height: '35px' }}>
               <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: opt2P + '%' }}
                  aria-valuenow={opt2P}
                  aria-valuemin="0"
                  aria-valuemax="100"
               >
                  <b>{opt2P + '%'}</b>
               </div>
            </div>
            <h5>
               {opt2Votes}
               <span> out of </span>
               {votes}
               <span> votes </span>
            </h5>
         </div>
      </div>
   );
}

export default PollResult;
