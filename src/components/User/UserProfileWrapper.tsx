import { FC, ReactNode } from 'react';

type UserProfileWrapperProps = {
  avatar: ReactNode;
  username: string;
  bio: ReactNode;
  button?: ReactNode;
};

export const UserProfileWrapper: FC<UserProfileWrapperProps> = ({
  avatar,
  username,
  bio,
  button,
}) => {
  return (
    <div className="w-[95%] tn:w-[340px] sm:w-[384px]">
      {avatar}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">@{username}</h1>
        <div className="mt-4">{bio}</div>
      </div>
      {button}
    </div>
  );
};
