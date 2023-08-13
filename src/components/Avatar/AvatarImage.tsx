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
  const now = new Date().getTime();
  let src = image;

  // check it is a preview image or not
  if (image.startsWith('https')) src = `${image}?${now}`; // force web browser to not use cached image

  return (
    <AvatarWrapper
      wrapperClassName="placeholder"
      className="bg-neutral-focus text-neutral-content"
      {...props}
    >
      <img src={src} alt="avatar" />
      {children}
    </AvatarWrapper>
  );
};
