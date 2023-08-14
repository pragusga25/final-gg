import { getUser } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { parseUserData } from '@/utils';
import { useAuth } from '@/hooks';

export const useUserQuery = (username: string) => {
  const {
    auth: { user },
  } = useAuth();
  const query = useQuery(['user', username], {
    queryFn: () =>
      getUser(username).then((data) => parseUserData(data, user?.id)),
    staleTime: 5000, // 5 seconds
  });

  return query;
};
