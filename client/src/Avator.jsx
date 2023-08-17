import React from 'react';

const RandomCuteAvatar = ({ identifier }) => {
  const avatarUrl = `https://robohash.org/${identifier}.png?set=set4`;

  return (
    <img src={avatarUrl} alt="Cute Cartoon Avatar" />
  );
}

export default RandomCuteAvatar;