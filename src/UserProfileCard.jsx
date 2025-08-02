import React from "react";

const UserProfileCard = ({ user }) => {
  return (
    <div className="user-profile-card">
      <p>
        {user.name.first} {user.name.last}
      </p>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfileCard;
