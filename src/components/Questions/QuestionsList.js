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
      </div>
   );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
   const unansweredQuestions = Object.values(questions).filter(
      (qution) =>
         !qution.optionOne.votes.includes(authedUser) &&
         !qution.optionTwo.votes.includes(authedUser)
   );

   const answeredQuestions = Object.values(questions).filter(
      (qution) =>
         qution.optionOne.votes.includes(authedUser) ||
         qution.optionTwo.votes.includes(authedUser)
   );

   return { unansweredQuestions, answeredQuestions, users };
};

export default connect(mapStateToProps)(QuestionsList);
