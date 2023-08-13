import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { UserProfile } from './UserProfile';
import { UserProfileEdit } from './UserProfileEdit';
import { useAuth } from '@/hooks';

export const User = () => {
  const { username } = useParams<{ username: string }>();
  const {
    auth: { user },
  } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (!username) return null;

  const isMe = user?.username === username;

  const toggleEdit = () => setIsEditing((prev) => !prev);

  if (isEditing && isMe)
    return <UserProfileEdit username={username} onCancel={toggleEdit} />;

  return <UserProfile username={username} onEdit={toggleEdit} isMe={isMe} />;
};
