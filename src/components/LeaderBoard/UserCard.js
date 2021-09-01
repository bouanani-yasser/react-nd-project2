import React from 'react';
import Avatar from '../UI/Avatar';

function UserCard({ user, rank }) {
   const answers = Object.keys(user.answers).length;
   const questions = Object.keys(user.questions).length;
   return (
      <div className="user-card">
         <div className="rank">{rank}</div>
         <Avatar user={user} />
         <div className="user-info">
            <h2 className="username">{user.name}</h2>
            <div className="questions-stats">
               <h5>Answered Questions</h5>
               <b>{answers}</b>
            </div>
            <div className="questions-stats">
               <h5>Created Questions</h5>
               <b>{questions}</b>
            </div>
         </div>
         <div className="score">
            <h4>Score</h4>
            <h4 className="value">{questions + answers}</h4>
         </div>
      </div>
   );
}
export default UserCard;
