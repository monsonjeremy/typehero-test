import React, { FC } from 'react';
import { Avatar } from '@components/ui';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface UserCardProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  totalChallenges: number;
  followersCount: number;
  followingCount: number;
}
UserCard.defaultProps = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  bio: 'This is John Doe Bio',
  avatar: 'https://file.rendit.io/n/p.png',
  totalChallenges: 5,
  followersCount: 100,
  followingCount: 50,
};
{
  /* Validating the props to ensure we are receiving the right data type */
}
UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  totalChallenges: PropTypes.number,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number,
};

export const UserCard: FC = ({
  id,
  name,
  username,
  avatar,
  bio,
  totalChallenges,
  followersCount,
  followingCount,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center">
        {/* Avatar Component */}
        <Avatar className="mr-4" src={avatar} alt={name} size={64} />
        {/* User Information */}
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>
      </div>
      {/* Bio */}
      <p className="mt-4 text-gray-500">{bio}</p>
      {/* Statistic Information */}
      <div className="mt-4 flex justify-around text-center">
        <div>
          <p className="font-semibold">{totalChallenges}</p>
          <p className="text-sm text-gray-400">Challenges</p>
        </div>
        <div>
          <p className="font-semibold">{followersCount}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div>
          <p className="font-semibold">{followingCount}</p>
          <p className="text-sm text-gray-400">Following</p>
        </div>
      </div>
    </div>
  );
};
