import { FC, ReactNode } from 'react';
import { Avatar } from '@/components/Avatar';

export type UserAvatarProps = {
  uAvatar: string;
  image?: string;
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
  isOnline?: boolean;
  isEditMode?: boolean;
};

export const UserAvatar: FC<UserAvatarProps> = ({
  className,
  wrapperClassName,
  isOnline,
  isEditMode,
  ...props
}) => {
  let onlineStatus = isOnline ? 'online' : 'offline';
  if (isEditMode) onlineStatus = '';

  const avatarProps = {
    wrapperClassName: `placeholder ${wrapperClassName} ${onlineStatus}`,
    className: `bg-neutral-focus text-neutral-content w-40 tn:w-44 ${className}`,
    placeholderClassName: 'text-4xl',
    ...props,
  };

  return <Avatar {...avatarProps} />;
};
