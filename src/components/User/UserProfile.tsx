import { useUserQuery } from '@/hooks';
import { useParams } from 'react-router-dom';
import { UserAvatar } from './UserAvatar';
import { useState } from 'react';
import { UserAvatarEdit } from './UserAvatarEdit';

export const UserProfile = () => {
  const { username: uname } = useParams<{ username: string }>();
  if (!uname) return null;

  const { data, isLoading } = useUserQuery(uname);
  const [isEditing, _setIsEditing] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Not found</div>;

  let { username, image, uAvatar, bio } = data;
  bio =
    bio ??
    'Software Engineer | Full Stack Developer | React | Node.js | TypeScript | GraphQL | MongoDB | PostgreSQL | Docker | AWS | Serverless | Microservices | CI/CD | DevOps';
  const bioEl = bio ? (
    <div className="text-base-content mt-2">{bio}</div>
  ) : null;

  const avatarProps = {
    uAvatar,
    image,
  };

  let avatar = <UserAvatar {...avatarProps} />;
  if (isEditing) {
    avatar = <UserAvatarEdit {...avatarProps} />;
  }

  return (
    <div className="max-w-sm">
      {avatar}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">@{username}</h1>
        {bioEl}
      </div>

      {/* <button
        className="btn btn-primary mt-4 w-full"
        onClick={() => setIsEditing((prev) => !prev)}
      >
        {isEditing ? 'Cancel' : 'Edit'}
      </button> */}
    </div>
  );
};
