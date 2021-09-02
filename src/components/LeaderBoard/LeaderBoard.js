import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserCard from './UserCard';
import './LeaderBoard.css';

const LeaderBoard = ({ users, authedUser }) => {
   return !authedUser ? (
      <Redirect to="/signin" />
   ) : (
      <div className="leader-board">
         {users.map((user, index) => (
            <UserCard key={user.id} user={user} rank={index + 1} />
         ))}
      </div>
   );
};

const mapStateToProps = ({ users, authedUser }) => ({
   // Sort users depend on their score
   authedUser,
   users: Object.values(users).sort((a, b) => {
      const score_a =
         Object.keys(a.answers).length + Object.keys(a.questions).length;
      const score_b =
         Object.keys(b.answers).length + Object.keys(b.questions).length;
      return score_b - score_a;
   }),
});

export default connect(mapStateToProps)(LeaderBoard);
