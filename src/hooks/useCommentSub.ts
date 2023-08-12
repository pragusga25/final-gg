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
    auth: { user },
  } = useAuth();

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      console.log('connected');
    };

    const onDisconnect = () => {
      setIsConnected(false);
      console.log('disconnected');
    };

    const onComment = (data: WsComment) => {
      queryClient.setQueryData(
        [videoId, 'comments', user?.username],
        (oldData: WsComment[] | undefined) => {
          if (!oldData) return [];
          return parseCommentsData([...oldData, data], user?.username);
        }
      );
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on(`${videoId}:comment`, onComment);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off(`${videoId}:comment`, onComment);
    };
  }, [queryClient, videoId, socket]);

  return { isConnected };
};
