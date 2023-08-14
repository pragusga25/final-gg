import { FC, ReactNode } from 'react';

type VideoCardWrapperProps = {
  thumbnailColor?: string;
  children?: ReactNode;
};

export const VideoCardWrapper: FC<VideoCardWrapperProps> = ({
  children,
  thumbnailColor,
}) => {
  return (
    <div
      className={`w-full bg:max-w-lg mx-auto cursor-pointer mb-6 bg-gray-800 rounded-lg overflow-hidden dark:bg-gray-900`}
      style={{
        boxShadow: `1px 9px 73px -17px ${thumbnailColor}`,
      }}
    >
      {children}
    </div>
  );
};
