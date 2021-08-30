import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../UI/Avatar';
import { logoutUser } from '../../actions/auth';

import './Header.css';

function Header({ user, dispatch }) {
   return (
      <header>
         <ul className="menu-items">
            <li>Home</li>
            <li>New Question</li>
            <li>Leader Board</li>
         </ul>
         {user && (
            <div className="profile">
               <h5 className="username">
                  {' '}
                  Hello, <b>{user.name}</b>{' '}
               </h5>
               <Avatar user={user} miniSize />
               <button className="btn" onClick={() => dispatch(logoutUser())}>
                  Logout
               </button>
            </div>
         )}
      </header>
   );
}

const mapStateToProps = ({ authedUser, users }) => ({
   user: users[authedUser],
});

export default connect(mapStateToProps)(Header);
