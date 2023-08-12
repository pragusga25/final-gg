import { FC } from 'react';
import { Avatar } from '@/components/Avatar';

type CommentAvatarProps = {
  uAvatar: string;
  image?: string;
};

export const CommentAvatar: FC<CommentAvatarProps> = ({ ...props }) => {
  const avatarProps = {
    wrapperClassName: 'chat-image placeholder',
    className: 'bg-neutral-focus text-neutral-content w-10',
    ...props,
  };

  return <Avatar {...avatarProps} />;
};
