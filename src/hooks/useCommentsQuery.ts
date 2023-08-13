import { useQuery } from '@tanstack/react-query';
import { getComments } from '@/api';
import { parseCommentsData } from '@/utils';
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
