import { useRef } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { setAuthedUser } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import './Signin.css';

const Signin = ({ users, dispatch, authedUser }) => {
   const selectRef = useRef();

   const signIn = () => {
      const userId =
         selectRef.current.options[selectRef.current.selectedIndex].value;
      dispatch(setAuthedUser(userId));
   };
   return authedUser ? (
      <Redirect to="/" />
   ) : (
      <div className="signin">
         <div className="signin-head">
            <h2>Welcome to the Would You Rather App!</h2>
            <p>Please sign in to continue</p>
         </div>
         <div className="signin-body">
            <h2>Sing In</h2>
            <Form.Select className="selectpicker" ref={selectRef}>
               <option defaultValue disabled>
                  Select a user
               </option>
               {users &&
                  Object.values(users).map((user) => (
                     <option key={user.id} value={user.id}>
                        {user.name}
                     </option>
                  ))}
            </Form.Select>
            <button className="btn btn-success" onClick={() => signIn()}>
               Sign In
            </button>
         </div>
      </div>
   );
};

const mapStateToProps = ({ users, authedUser }) => ({ users, authedUser });

export default connect(mapStateToProps)(Signin);
