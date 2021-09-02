import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import QuestionsList from '../Questions/QuestionsList';

function Home({ authedUser }) {
   return (
      <div>{authedUser ? <QuestionsList /> : <Redirect to="/signin" />}</div>
   );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(Home);
