import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { UserProfile } from './UserProfile';
import { UserProfileEdit } from './UserProfileEdit';
import { useUserQuery } from '@/hooks';
import { NotFound } from '@/components/NotFound';
import { Spinner } from '@/components//Spinner';

export const User = () => {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError } = useUserQuery(username!);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const isMe = data?.isMe ?? false;

  const toggleEdit = () => setIsEditing((prev) => !prev);

  if (isEditing && isMe)
    return <UserProfileEdit username={username!} onCancel={toggleEdit} />;

  return <UserProfile username={username!} onEdit={toggleEdit} isMe={isMe} />;
};
