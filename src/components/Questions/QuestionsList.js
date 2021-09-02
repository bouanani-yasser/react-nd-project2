import { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

import './Questions.css';

const QuestionsList = ({ unansweredQuestions, answeredQuestions, users }) => {
   const [activeTap, setActiveTap] = useState('unanswered');

   return (
      <div className="questions-wrapper">
         <nav>
            <button
               className={`${activeTap === 'unanswered' ? 'active' : ''}`}
               onClick={() => {
                  setActiveTap('unanswered');
               }}
            >
               Unanswered Questions
            </button>
            <button
               className={`${activeTap === 'answered' ? 'active' : ''}`}
               onClick={() => {
                  setActiveTap('answered');
               }}
            >
               Answered Questions
            </button>
         </nav>
         {unansweredQuestions && activeTap === 'unanswered'
            ? unansweredQuestions.map((quest) => (
                 <Question
                    key={quest.id}
                    question={quest}
                    user={users[quest.author]}
                 />
              ))
            : answeredQuestions &&
              activeTap === 'answered' &&
              answeredQuestions.map((quest) => (
                 <Question
                    key={quest.id}
                    question={quest}
                    user={users[quest.author]}
                 />
              ))}
         {unansweredQuestions.length === 0 && (
            <h2 style={{ margin: 20, textAlign: 'center' }}>
               Great!!
               <br />
               it seems you've answered all questions
            </h2>
         )}
      </div>
   );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
   let unansweredQuestions = Object.values(questions).filter(
      (question) =>
         !question.optionOne.votes.includes(authedUser) &&
         !question.optionTwo.votes.includes(authedUser)
   );

   let answeredQuestions = Object.values(questions).filter(
      (question) =>
         question.optionOne.votes.includes(authedUser) ||
         question.optionTwo.votes.includes(authedUser)
   );

   unansweredQuestions = unansweredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
   );

   answeredQuestions = answeredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
   );

   return { unansweredQuestions, answeredQuestions, users };
};

export default connect(mapStateToProps)(QuestionsList);
