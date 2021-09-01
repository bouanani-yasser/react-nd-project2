import React from 'react';

import './Avatar.css';

const Avatar = ({ user, miniSize, largeSize }) => {
   return (
      <div
         className={`avatar ${miniSize ? 'mini' : ''} ${
            largeSize ? 'large' : ''
         }`}
      >
         <img src={user.avatarURL} alt={user.name} />
      </div>
   );
};

export default Avatar;
