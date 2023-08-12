import { FC, ReactNode } from 'react';
import { Avatar } from '@/components/Avatar';

export type UserAvatarProps = {
  uAvatar: string;
  image?: string;
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
};

export const UserAvatar: FC<UserAvatarProps> = ({
  className,
  wrapperClassName,
  ...props
}) => {
  const avatarProps = {
    wrapperClassName: `placeholder ${wrapperClassName}`,
    className: `ring ring-teal-400 ring-offset-base-100 ring-offset-2 bg-neutral-focus text-neutral-content w-40 tn:w-44 ${className}`,
    ...props,
  };

  return <Avatar {...avatarProps} />;
};
