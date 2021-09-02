import React from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';

import { handleNewVote } from '../../actions/questions';

const PollForm = ({ question, dispatch }) => {
   const submitHandler = (e) => {
      e.preventDefault();
      const values = serializeForm(e.target, { hash: true });
      dispatch(handleNewVote(question.id, values.opt));
   };

   return (
      <div className="question-ctn">
         <h2>Would you rather ...</h2>
         <form
            onSubmit={(e) => {
               submitHandler(e);
            }}
         >
            <div className="form-check">
               <input
                  defaultChecked
                  className="form-check-input"
                  type="radio"
                  name="opt"
                  value="optionOne"
                  id="opt1"
               />
               <label className="form-check-label" htmlFor="opt1">
                  {question.optionOne.text}
               </label>
            </div>
            <div className="separator">
               <b className="or">OR</b>
               <hr />
            </div>
            <div className="form-check">
               <input
                  className="form-check-input"
                  type="radio"
                  name="opt"
                  value="optionTwo"
                  id="opt2"
               />
               <label className="form-check-label" htmlFor="opt2">
                  {question.optionTwo.text}
               </label>
            </div>

            <button className="btn btn-success">Submit</button>
         </form>
      </div>
   );
};

export default connect()(PollForm);
