import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { initiateData } from '../actions/shared';
import Home from './Home/Home';
import Header from './Header/Header';

function App({ dispatch, loading }) {
   useEffect(() => {
      dispatch(initiateData());
   }, [dispatch, loading]);

   return (
      <>
         <LoadingBar style={{ backgroundColor: '#198754', height: '4px' }} />
         <Header />
         {!loading && <Home />}
      </>
   );
}

function mapStateToProps({ users }) {
   return {
      loading: users === {},
   };
}

export default connect(mapStateToProps)(App);
