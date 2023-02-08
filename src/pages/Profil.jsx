import React from 'react';

const Profil = ({ user, logout }) => {
  return (
    <div>
      <h2>
        Mail : {user.email}
      </h2>
      <p>Pseudo : {user.displayName}</p>
    </div>
  );
};

export default Profil;