import React from 'react';
import Form from 'react-bootstrap/Form';
import serializeForm from 'form-serialize';

import './NewQuestion.css';

const NewQuestion = () => {
   const submitHandler = (e) => {
      e.preventDefault();
      const values = serializeForm(e.target, { hash: true });
      console.dir(values);
   };

   return (
      <div className="new-question">
         <div className="head">
            <h2>Create New Question</h2>
         </div>
         <div className="body">
            <p>Complete the question:</p>
            <h4>Would you rather ...</h4>
            <Form onSubmit={(e) => submitHandler(e)}>
               <Form.Control
                  name="opt1"
                  size="lg"
                  type="text"
                  placeholder="Enter option one text here"
               />
               <div className="separator">
                  <b className="or">OR</b>
                  <hr />
               </div>

               <Form.Control
                  name="opt2"
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

export default NewQuestion;
