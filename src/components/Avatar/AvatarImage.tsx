import { FC, ReactNode } from 'react';
import { AvatarWrapper, AvatarWrapperProps } from './AvatarWrapper';

type AvatarImageProps = AvatarWrapperProps & {
  image: string;
  children?: ReactNode;
};

export const AvatarImage: FC<AvatarImageProps> = ({
  image,
  children,
  ...props
}) => {
  return (
    <AvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
      {...props}
    >
      <img src={image} />
      {children}
    </AvatarWrapper>
  );
};
