import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { Route } from 'react-router-dom';

import { initiateData } from '../actions/shared';
import Home from './Home/Home';
import Header from './Header/Header';
import NewQuestion from './Questions/NewQuestion';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Poll from './Poll/Poll';

function App({ dispatch }) {
   useEffect(() => {
      dispatch(initiateData());
   }, [dispatch]);

   return (
      <>
         <LoadingBar style={{ backgroundColor: '#198754', height: '4px' }} />
         <Header />
         <Route path="/" exact>
            <Home />
         </Route>
         <Route path="/new-question">
            <NewQuestion />
         </Route>
         <Route path="/leader-board">
            <LeaderBoard />
         </Route>
         <Route
            path="/poll/:authorID/:questionID"
            render={(props) => <Poll {...props} />}
         ></Route>
      </>
   );
}

function mapStateToProps({ users }) {
   return {
      loading: users === {},
   };
}

export default connect(mapStateToProps)(App);
