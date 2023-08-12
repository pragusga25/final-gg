import { FC, ReactNode } from 'react';
import { AvatarImage } from './AvatarImage';
import { AvatarPlaceholder } from './AvatarPlaceHolder';

type AvatarProps = {
  uAvatar: string;
  image?: string;
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
};

export const Avatar: FC<AvatarProps> = ({ uAvatar, image, ...props }) => {
  const avatar = image ? (
    <AvatarImage image={image} {...props} />
  ) : (
    <AvatarPlaceholder uAvatar={uAvatar} {...props} />
  );

  return avatar;
};
