import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <span>{user.email}</span>
      <span>{user.id}</span>
    </div>
  );
};

export default User;
