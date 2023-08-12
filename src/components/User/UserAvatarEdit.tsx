import { FC } from 'react';
import { UserAvatar, UserAvatarProps } from './UserAvatar';
import {
  UserAvatarDropdown,
  UserAvatarDropdownProps,
} from './UserAvatarDropdown';

type UserAvatarEditProps = UserAvatarProps & UserAvatarDropdownProps;

export const UserAvatarEdit: FC<UserAvatarEditProps> = ({
  onRemove,
  onUpload,
  ...props
}) => {
  const dropdown = (
    <UserAvatarDropdown onRemove={onRemove} onUpload={onUpload} />
  );

  return <UserAvatar {...props} children={dropdown} />;
};
