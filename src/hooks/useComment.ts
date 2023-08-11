import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getComments, postComment } from '@/api';
import { CreateComment } from '@/types';
import { parseCommentsData, validateComment } from '@/utils';
import { useAuth } from '@/hooks';

export const useCommentsQuery = (videoId: string) => {
  const {
    auth: { user },
  } = useAuth();

  const query = useQuery([videoId, 'comments', user?.username], {
    queryFn: () =>
      getComments(videoId).then((data) =>
        parseCommentsData(data, user?.username)
      ),
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
        queryClient.invalidateQueries([videoId, 'comments']);
      },
    }
  );

  return mutation;
};
