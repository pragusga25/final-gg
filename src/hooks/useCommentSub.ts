import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { socket } from '@/api';
import { WsComment } from '@/types';
import { useAuth } from '@/hooks';
import { parseCommentsData } from '@/utils';

export const useCommentSub = (videoId?: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const queryClient = useQueryClient();
  const {
    auth: { user, accessToken },
  } = useAuth();

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onComment = (data: WsComment) => {
      console.log('NEW DATA: ', data);
      queryClient.setQueryData(
        [videoId, 'comments', user?.username],
        (oldData: WsComment[] | undefined) => {
          if (!oldData) return [];
          return parseCommentsData([...oldData, data], user?.username);
        }
      );
    };

    const onCommentDeleted = ({ id }: { id: string }) => {
      queryClient.setQueryData(
        [videoId, 'comments', user?.username],
        (oldData: WsComment[] | undefined) => {
          if (!oldData) return [];
          const filteredData = oldData.filter((comment) => comment.id !== id);
          return parseCommentsData(filteredData, user?.username);
        }
      );
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on(`${videoId}:comment`, onComment);
    socket.on(`${videoId}:comment:deleted`, onCommentDeleted);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off(`${videoId}:comment`, onComment);
      socket.off(`${videoId}:comment:deleted`, onCommentDeleted);
    };
  }, [queryClient, videoId, socket, accessToken]);

  return { isConnected };
};
