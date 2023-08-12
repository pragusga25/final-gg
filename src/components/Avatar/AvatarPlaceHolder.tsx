import { FC, ReactNode } from 'react';
import { AvatarWrapper, AvatarWrapperProps } from './AvatarWrapper';

type AvatarPlaceholderProps = AvatarWrapperProps & {
  uAvatar: string;
  children?: ReactNode;
};

export const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({
  uAvatar,
  children,
  ...props
}) => {
  return (
    <AvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
      {...props}
    >
      <span className="text-sm">{uAvatar}</span>
      {children}
    </AvatarWrapper>
  );
};
