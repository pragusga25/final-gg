import { useMe, useUpdateUser } from '@/hooks';
import { UpdateUserPayload } from '@/types';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

export const useUpdateUserForm = () => {
  const { data } = useMe();
  const { mutate } = useUpdateUser(true);

  const defaultBio = data?.bio;
  const defaultImage = data?.image;

  const [payload, setPayload] = useState<UpdateUserPayload>({
    bio: defaultBio,
    image: null,
    removeImage: false,
  });

  const [previewImage, setPreviewImage] = useState<string | undefined>(
    defaultImage
  );

  const [imageChanged, setImageChanged] = useState(false);

  const onBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let { value } = e.target;
    setPayload((prevState) => ({ ...prevState, bio: value }));
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setImageChanged(true);
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setPayload((prevState) => ({
        ...prevState,
        image: file,
        removeImage: false,
      }));
    }
  };

  const onSave = async () => {
    const formData = new FormData();
    let { bio, image, removeImage } = payload;

    const isPayloadChanged = bio !== defaultBio || imageChanged;

    if (!isPayloadChanged) {
      toast.error('No changes detected');
      return;
    }

    bio = bio?.trim();
    if (typeof bio === 'string' && bio.length === 0) bio = undefined;

    if (bio) formData.append('bio', bio);
    if (image) formData.append('image', image);
    if (removeImage) formData.append('removeImage', 'true');

    mutate(formData);
  };

  const onRemoveImage = () => {
    setPayload((prevState) => ({ ...prevState, removeImage: true }));
    setPreviewImage(undefined);
    setImageChanged(true);
  };

  return {
    payload,
    previewImage,
    onBioChange,
    onImageChange,
    onSave,
    onRemoveImage,
  };
};
