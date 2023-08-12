import { FC, ReactNode } from 'react';
import { AvatarWrapper, AvatarWrapperProps } from './AvatarWrapper';

type AvatarPlaceholderProps = AvatarWrapperProps & {
  uAvatar: string;
  children?: ReactNode;
  placeholderClassName?: string;
};

export const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({
  uAvatar,
  children,
  placeholderClassName = 'text-sm',
  ...props
}) => {
  return (
    <AvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
      {...props}
    >
      <span className={placeholderClassName}>{uAvatar}</span>
      {children}
    </AvatarWrapper>
  );
};
