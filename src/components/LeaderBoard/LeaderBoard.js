import React from 'react';
import { connect } from 'react-redux';

import './LeaderBoard.css';
import UserCard from './UserCard';

const LeaderBoard = ({ users }) => {
   return (
      <div className="leader-board">
         {users.map((user) => (
            <UserCard key={user.id} user={user} />
         ))}
      </div>
   );
};

const mapStateToProps = ({ users, questions }) => ({
   users: Object.values(users),
});

export default connect(mapStateToProps)(LeaderBoard);
