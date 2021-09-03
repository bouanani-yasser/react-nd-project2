import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { initiateData } from '../actions/shared';
import Home from './Home/Home';
import Header from './Header/Header';
import NewQuestion from './Questions/NewQuestion';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Signin from './Signin/Signin';
import Poll from './Poll/Poll';
import ERR404 from './404/404';

import './App.css';

function App({ dispatch }) {
   useEffect(() => {
      dispatch(initiateData());
   }, [dispatch]);

   return (
      <div className="app">
         <LoadingBar style={{ backgroundColor: '#198754', height: '4px' }} />
         <Header />
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route
               path="/add"
               render={(props) => <NewQuestion {...props} />}
            ></Route>
            <Route
               path="/leaderboard"
               render={(props) => <LeaderBoard {...props} />}
            ></Route>
            <Route
               path="/signin"
               render={(props) => <Signin {...props} />}
            ></Route>
            <Route
               path="/question/:questionID"
               render={(props) => <Poll {...props} />}
            ></Route>
            <Route path="/">
               <ERR404 />
            </Route>
         </Switch>
      </div>
   );
}

function mapStateToProps({ users }) {
   return {
      loading: users === {},
   };
}

export default connect(mapStateToProps)(App);
