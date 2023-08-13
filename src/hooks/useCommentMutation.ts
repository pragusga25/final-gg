import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment } from '@/api';
import { CreateComment } from '@/types';
import { validateComment } from '@/utils';

export const useCommentMutation = (videoId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: CreateComment) => {
      validateComment(data);
      return postComment(videoId, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([videoId, 'comments']);
      },
    }
  );

  return mutation;
};
