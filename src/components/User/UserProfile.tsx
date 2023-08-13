import { useUserQuery } from '@/hooks';
import { UserAvatar } from './UserAvatar';
import { FC } from 'react';
import { UserProfileWrapper } from './UserProfileWrapper';

type UserProfileProps = {
  username: string;
  onEdit: () => unknown;
  isMe?: boolean;
};

export const UserProfile: FC<UserProfileProps> = ({
  username,
  onEdit,
  isMe,
}) => {
  const { data, isLoading } = useUserQuery(username);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  let { image, uAvatar, bio } = data;
  if (!bio) {
    bio = `404 Bio Not Found: It's like this user is in airplane mode when it comes to writing a bio!`;
  }

  const button = isMe ? (
    <button className="btn btn-primary mt-4 w-full" onClick={onEdit}>
      Edit
    </button>
  ) : null;

  return (
    <UserProfileWrapper
      avatar={
        <UserAvatar
          uAvatar={uAvatar}
          image={image}
          isOnline={isMe || data.isOnline}
        />
      }
      bio={<div className="text-base-content">{bio}</div>}
      username={username}
      button={button}
    />
  );
};
