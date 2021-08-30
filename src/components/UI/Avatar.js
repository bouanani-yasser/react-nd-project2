import React from 'react';

import './Avatar.css';

const Avatar = ({ user, miniSize }) => {
   return (
      <div className={`avatar ${miniSize && 'mini'}`}>
         <img src={user.avatarURL} alt={user.name} />
      </div>
   );
};

export default Avatar;
