import { useAuth } from '@/hooks';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { socket } from '../api';

export const useCommentForm = (videoId: string) => {
  const {
    auth: { accessToken },
  } = useAuth();

  const [comment, setComment] = useState('');

  const sendComment = () => {
    const { length } = comment;
    if (length === 0) toast.error('Comment cannot be empty');
    if (length > 255) toast.error('Max 255 chars per comment');
    socket.emit('comment', { comment, accessToken, videoId });
    setComment('');
  };

  const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendComment();
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value.trim());

  return { comment, onChange, sendComment, onEnterPress };
};
