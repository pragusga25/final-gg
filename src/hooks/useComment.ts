import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getComments, postComment } from '@/api';
import { CreateComment } from '@/models';
import { validateComment } from '@/utils';

export const useCommentsQuery = (videoId: string) => {
  const query = useQuery(['comments', videoId], {
    queryFn: () => getComments(videoId),
  });

  return query;
};

export const useCommentMutation = (videoId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: CreateComment) => {
      validateComment(data);
      return postComment(videoId, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', videoId]);
      },
    }
  );

  return mutation;
};
