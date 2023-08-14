import { FC } from 'react';
import { AvatarImage } from './AvatarImage';
import { AvatarPlaceholder } from './AvatarPlaceHolder';
import { AvatarWrapperProps } from './AvatarWrapper';

type AvatarProps = AvatarWrapperProps & {
  uAvatar?: string;
  image?: string;
  placeholderClassName?: string;
  wrapperClassName?: string;
};

export const Avatar: FC<AvatarProps> = ({ uAvatar, image, ...props }) => {
  const avatar = image ? (
    <AvatarImage image={image} {...props} />
  ) : (
    <AvatarPlaceholder {...props} uAvatar={uAvatar} />
  );

  return avatar;
};
