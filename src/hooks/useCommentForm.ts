import { useAuth } from '@/hooks';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { socket } from '@/api';
import { validateUsername } from '@/utils';

export const useCommentForm = (videoId?: string) => {
  const {
    auth: { accessToken },
    isLoggedIn,
  } = useAuth();

  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [guestMode, setGuestMode] = useState(!isLoggedIn);
  const disabled =
    comment.length === 0 || comment.length > 255 || usernameError;

  const sendComment = () => {
    if (disabled) return;

    const { length } = comment.trim();
    if (length === 0) toast.error('Comment cannot be empty');
    if (length > 255) toast.error('Max 255 chars per comment');
    socket.emit('comment', {
      comment,
      accessToken: guestMode ? undefined : accessToken,
      videoId,
      guestUsername: guestMode ? username : undefined,
    });
    setComment('');
  };

  const toggleGuestMode = () => setGuestMode((prev) => !prev);

  const onEnterPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendComment();
    }
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    const err = validateUsername(e.target.value);
    if (err) setUsernameError(err);
    else setUsernameError('');
  };

  return {
    comment,
    onCommentChange,
    sendComment,
    onEnterPress,
    disabled,
    username,
    onUsernameChange,
    guestMode,
    toggleGuestMode,
    usernameError,
  };
};
