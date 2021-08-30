import React from 'react';
import { connect } from 'react-redux';

import QuestionsList from '../Questions/QuestionsList';
import Signin from '../Signin/Signin';

function Home({ authedUser }) {
   console.log(`authedUser`, authedUser);
   return <div>{authedUser ? <QuestionsList /> : <Signin />}</div>;
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(Home);
