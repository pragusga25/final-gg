import { cn } from '@/utils';
import { FC, ReactNode } from 'react';

type CommentAvatarProps = {
  uAvatar: string;
  image?: string;
};

export const CommentAvatar: FC<CommentAvatarProps> = ({ uAvatar, image }) => {
  const avatar = image ? (
    <CommentAvatarImage image={image} />
  ) : (
    <CommentAvatarPlaceholder uAvatar={uAvatar} />
  );

  return avatar;
};

type CommentAvatarWrapperProps = {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const CommentAvatarWrapper: FC<CommentAvatarWrapperProps> = ({
  children,
  wrapperClassName,
  className,
}) => {
  return (
    <div className={cn('avatar chat-image', wrapperClassName)}>
      <div className={cn('rounded-full w-10', className)}>{children}</div>
    </div>
  );
};

type CommentAvatarPlaceholderProps = {
  uAvatar: string;
};

const CommentAvatarPlaceholder: FC<CommentAvatarPlaceholderProps> = ({
  uAvatar,
}) => {
  return (
    <CommentAvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
    >
      <span className="text-sm">{uAvatar}</span>
    </CommentAvatarWrapper>
  );
};

type CommentAvatarImageProps = {
  image: string;
};

const CommentAvatarImage: FC<CommentAvatarImageProps> = ({ image }) => {
  return (
    <CommentAvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
    >
      <img src={image} />
    </CommentAvatarWrapper>
  );
};
