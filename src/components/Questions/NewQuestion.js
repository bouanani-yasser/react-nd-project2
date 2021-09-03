import React from 'react';
import Form from 'react-bootstrap/Form';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { handleNewQuestion } from '../../actions/questions';
import { Redirect } from 'react-router-dom';

import './NewQuestion.css';

const NewQuestion = ({ dispatch, authedUser, history, location }) => {
   const submitHandler = (e) => {
      e.preventDefault();
      const values = serializeForm(e.target, { hash: true });
      if (Object.keys(values).length !== 2) {
         alert('Please fill the two option texts first!!');
         return;
      }
      if (values.opt1txt.trim() === '' || values.opt2txt.trim() === '') {
         alert('empty spaces are not allowed, please fill the two options!!');
         return;
      }
      dispatch(handleNewQuestion(values.opt1txt, values.opt2txt, history));
   };

   return !authedUser ? (
      <Redirect
         to={{
            pathname: '/signin',
            state: { from: location },
         }}
      />
   ) : (
      <div className="new-question">
         <div className="head">
            <h2>Create New Question</h2>
         </div>
         <div className="body">
            <p>Complete the question:</p>
            <h4>Would you rather ...</h4>
            <Form onSubmit={(e) => submitHandler(e)}>
               <Form.Control
                  name="opt1txt"
                  size="lg"
                  type="text"
                  placeholder="Enter option one text here"
               />
               <div className="separator">
                  <b className="or">OR</b>
                  <hr />
               </div>

               <Form.Control
                  name="opt2txt"
                  size="lg"
                  type="text"
                  placeholder="Enter option two text here"
               />
               <button className="btn btn-success ">Submit</button>
            </Form>
         </div>
      </div>
   );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(NewQuestion);
