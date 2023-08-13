import { useAuth } from '@/hooks';
import { socket } from '@/api';
import { useParams } from 'react-router-dom';

export const useDeleteComment = () => {
  const {
    auth: { accessToken },
  } = useAuth();
  const { id: videoId } = useParams<{ id: string }>();

  const onDelete = (id: string) => {
    if (!accessToken) return;
    socket.emit('comment:deleted', { accessToken, videoId, id });
  };

  return { onDelete };
};
