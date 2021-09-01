import React from 'react';

const PollForm = ({ question }) => {
   return (
      <div className="question-ctn">
         <h2>Would you rather ...</h2>
         <form>
            <div className="form-check">
               <input
                  defaultChecked
                  className="form-check-input"
                  type="radio"
                  name="opt"
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

export default PollForm;
