import { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { initiateData } from '../actions/shared';

function App({ dispatch }) {
   useEffect(() => {
      dispatch(initiateData());
   }, [dispatch]);

   return (
      <>
         <LoadingBar />
         <div className="App">hello</div>
      </>
   );
}

function mapStateToProps({ users }) {
   return {
      loading: users === null,
   };
}

export default connect(mapStateToProps)(App);
