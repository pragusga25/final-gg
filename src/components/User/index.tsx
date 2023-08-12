import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { UserProfile } from './UserProfile';
import { UserProfileEdit } from './UserProfileEdit';
import { useAuth } from '@/hooks';

export const User = () => {
  const { username } = useParams<{ username: string }>();

  if (!username) return null;

  const {
    auth: { user },
  } = useAuth();

  const isMe = user?.username === username;

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  if (isEditing && isMe)
    return <UserProfileEdit username={username} onCancel={toggleEdit} />;

  return <UserProfile username={username} onEdit={toggleEdit} isMe={isMe} />;
};
