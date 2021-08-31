import React from 'react';
import Avatar from '../UI/Avatar';

function UserCard({ user }) {
   return (
      <div className="user-card">
         <Avatar user={user} />
         <div className="user-info">
            <h2 className="username">{user.name}</h2>
            <div className="questions-stats">
               <h5>Answered Questions</h5>
               <b>{Object.keys(user.answers).length}</b>
            </div>
            <div className="questions-stats">
               <h5>Created Questions</h5>
               <b>{Object.keys(user.questions).length}</b>
            </div>
         </div>
         <div className="score">
            <h4>Score</h4>
            <h4 className="value">10</h4>
         </div>
      </div>
   );
}

{
}
export default UserCard;
