import { useUpdateUserForm, useUserQuery } from '@/hooks';
import { FC } from 'react';
import { UserProfileWrapper } from './UserProfileWrapper';
import { UserAvatarEdit } from './UserAvatarEdit';

type UserProfileEditProps = {
  username: string;
  onCancel: () => unknown;
};

export const UserProfileEdit: FC<UserProfileEditProps> = ({
  username,
  onCancel,
}) => {
  const { data } = useUserQuery(username);

  if (!data) return null;

  const {
    onSave,
    onBioChange,
    onImageChange,
    onRemoveImage,
    previewImage,
    payload: { bio },
  } = useUpdateUserForm();

  const { uAvatar } = data;

  return (
    <UserProfileWrapper
      avatar={
        <UserAvatarEdit
          onRemove={onRemoveImage}
          onUpload={onImageChange}
          uAvatar={uAvatar}
          image={previewImage}
        />
      }
      bio={
        <textarea
          className="w-full h-24 p-2 rounded-md bg-base-100 text-sm focus:outline-none ring-1 ring-teal-400"
          placeholder="Write your bio here..."
          onChange={onBioChange}
          value={bio}
          maxLength={100}
          minLength={0}
        />
      }
      username={username}
      button={
        <div className="mt-4 grid grid-cols-2 gap-x-2 text-white">
          <button className="btn btn-error" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={onSave}>
            Save
          </button>
        </div>
      }
    />
  );
};
