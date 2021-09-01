import React from 'react';
import { connect } from 'react-redux';

import './LeaderBoard.css';
import UserCard from './UserCard';

const LeaderBoard = ({ users }) => {
   return (
      <div className="leader-board">
         {users.map((user, index) => (
            <UserCard key={user.id} user={user} rank={index + 1} />
         ))}
      </div>
   );
};

const mapStateToProps = ({ users }) => ({
   // Sort users depend on their score
   users: Object.values(users).sort((a, b) => {
      const score_a =
         Object.keys(a.answers).length + Object.keys(a.questions).length;
      const score_b =
         Object.keys(b.answers).length + Object.keys(b.questions).length;
      return score_b - score_a;
   }),
});

export default connect(mapStateToProps)(LeaderBoard);
