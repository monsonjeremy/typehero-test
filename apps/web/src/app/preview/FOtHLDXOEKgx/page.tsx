import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function UserCard({ user }) {
  return (
    <div className="card mx-auto w-full overflow-hidden rounded-xl shadow-md md:w-80 md:max-w-md">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={user.image || 'https://file.rendit.io/n/p.png'}
            alt={user.name}
            width={500}
            height={500}
          />
        </div>
        <div className="p-8">
          <div className="text-teal-accent-4 text-sm font-semibold uppercase tracking-wide">
            {user.username}
          </div>

          <a className="mt-1 block text-lg font-medium text-black hover:underline">{user.name}</a>

          <p className="mt-2 text-gray-500">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  user: {
    name: 'Default Name',
    username: 'DefaultUsername',
    bio: 'Default Bio',
    image: 'https://file.rendit.io/n/p.png',
  },
};
